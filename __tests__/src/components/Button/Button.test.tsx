import 'react-native';
import React from 'react';

import {
    render,
    fireEvent,
} from '../../../../jest/helper';

import { Button } from '../../../../src/components';

import { theme } from '../../../../src/global/styles';

const onPressMock = jest.fn();

const buttonLabel = 'banana';

const buttonTestId = {
    touchable: 'button',
    label: 'button-label',
};

const renderButton = <Button label={buttonLabel} onPress={onPressMock} />;

describe('Button', () => {

    // to clean the onPressMock
    // after each test.
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render correctly and match the snapshot', () => {
        const { toJSON } = render(renderButton);

        expect(toJSON()).toMatchSnapshot();
    });

    it('should render correctly', () => {
        const { getByRole } = render(renderButton);

        const button = getByRole('button');

        expect(button).toBeTruthy();
    });

    it('should call onPress', () => {
        const { getByText } = render(renderButton);

        fireEvent.press(getByText(buttonLabel));

        expect(onPressMock).toHaveBeenCalled();
    });

    it('should call onPress 3x', () => {
        const { getByText } = render(renderButton);

        fireEvent.press(getByText(buttonLabel));
        fireEvent.press(getByText(buttonLabel));
        fireEvent.press(getByText(buttonLabel));

        expect(onPressMock).toHaveBeenCalledTimes(3);
    });

    it('should render with the color, theme.colors.primary, when the button is enabled', () => {
        const { getByTestId } = render(renderButton);

        const button = getByTestId(buttonTestId.touchable);

        expect(button.parent?.props.style.backgroundColor).toBe(theme.colors.primary);
    });

    it('should render disabled', () => {
        const { getByTestId } = render(
            <Button
                onPress={onPressMock}
                label={buttonLabel}
                disabled
            />,
        );

        const button = getByTestId(buttonTestId.touchable);

        expect(button.props).toHaveProperty('accessibilityState', { "disabled": true });
    });

    it('should render with the color, theme.colors.highlight, when the button is disabled', () => {
        const { getByTestId } = render(
            <Button
                onPress={onPressMock}
                label={buttonLabel}
                disabled
            />,
        );

        const button = getByTestId(buttonTestId.touchable);

        expect(button.parent?.props.style.backgroundColor).toBe(theme.colors.highlight);
    });

    it('should render with custom styles', () => {
        const { getByTestId } = render(
            <Button
                onPress={onPressMock}
                label={buttonLabel}
                style={{
                    backgroundColor: 'red',
                }}
            />,
        );

        const button = getByTestId(buttonTestId.touchable);

        expect(button.parent?.props.style.backgroundColor).toBe('red');
    });

    it(`should render the label, ${buttonLabel}`, () => {
        const { getByTestId } = render(renderButton);

        const button = getByTestId(buttonTestId.label);

        expect(button.props.children).toBe(buttonLabel);
    });

    it('should render the label color, theme.colors.heading', () => {
        const { getByTestId } = render(renderButton);

        const button = getByTestId(buttonTestId.label);

        expect(button.props.style[0].color).toBe(theme.colors.heading);
    });
});
