import 'react-native';
import React from 'react';

import {
    render,
    fireEvent,
} from '../../../../jest/helper';

import { ButtonIcon } from '../../../../src/components';

import { theme } from '../../../../src/global/styles';

const onPressMock = jest.fn();

const buttonLabel = 'apple';

const buttonIconTestId = {
    touchable: 'button-icon',
    label: 'button-icon-label',
    icon: 'button-icon-icon',
};

const renderComponent = <ButtonIcon label={buttonLabel} onPress={onPressMock} />;

describe('ButtonIcon', () => {

    // to clean the onPressMock
    // after each test.
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render correctly and match the snapshot', () => {
        const { toJSON } = render(renderComponent);

        expect(toJSON()).toMatchSnapshot();
    });

    it('should render correctly', () => {
        const { getByTestId } = render(renderComponent);

        expect(getByTestId(buttonIconTestId.touchable)).toBeTruthy();
    });

    it('should render correctly with title', () => {
        const { getByTestId } = render(renderComponent);

        expect(getByTestId(buttonIconTestId.label)).toBeTruthy();
    });

    it('should render correctly with icon', () => {
        const { getByTestId } = render(renderComponent);

        expect(getByTestId(buttonIconTestId.icon)).toBeTruthy();
    });

    it('should call onPress', () => {
        const { getByTestId } = render(renderComponent);

        fireEvent.press(getByTestId(buttonIconTestId.touchable));

        expect(onPressMock).toHaveBeenCalled();
    });

    it('should call onPress 2x', () => {
        const { getByTestId } = render(renderComponent);

        fireEvent.press(getByTestId(buttonIconTestId.touchable));
        fireEvent.press(getByTestId(buttonIconTestId.touchable));

        expect(onPressMock).toHaveBeenCalledTimes(2);
    });

    it('should render with the color, theme.colors.primary, when the button is enabled', () => {
        const { getByTestId } = render(renderComponent);

        const button = getByTestId(buttonIconTestId.touchable);

        expect(button.parent?.props.style.backgroundColor).toBe(theme.colors.primary);
    });

    it('should render with custom styles', () => {
        const { getByTestId } = render(
            <ButtonIcon
                label={buttonLabel}
                onPress={onPressMock}
                style={{
                    backgroundColor: 'red',
                }}
            />,
        );

        const button = getByTestId(buttonIconTestId.touchable);

        expect(button.parent?.props.style.backgroundColor).toBe('red');
    });

    it(`should render the label, ${buttonLabel}`, () => {
        const { getByTestId } = render(renderComponent);

        const button = getByTestId(buttonIconTestId.label);

        expect(button.props.children).toBe(buttonLabel);
    });

    it('should render the label color, theme.colors.heading', () => {
        const { getByTestId } = render(renderComponent);

        const button = getByTestId(buttonIconTestId.label);

        expect(button.props.style[0].color).toBe(theme.colors.heading);
    });
});
