import 'react-native';
import React from 'react';

import {
    render,
    fireEvent,
} from '../../../../jest/helper';

import { ButtonAdd } from '../../../../src/components';

import { theme } from '../../../../src/global/styles';

const onPressMock = jest.fn();

const buttonAddTestId = 'button-add';
const buttonAddIconTestId = 'button-add-icon';

const renderComponent = <ButtonAdd onPress={onPressMock} />;

describe('ButtonAdd', () => {
    // to clean the onPressMock
    // after each test.
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render correctly and match the snapshot', () => {
        const { toJSON } = render(renderComponent);

        expect(toJSON()).toMatchSnapshot();
    });

    it('should render button', () => {
        const { getByTestId } = render(renderComponent);

        expect(getByTestId(buttonAddTestId)).toBeTruthy();
    });

    it('should render button with icon', () => {
        const { getByTestId } = render(renderComponent);

        expect(getByTestId(buttonAddIconTestId)).toBeTruthy();
    });

    it('should call onPress', () => {
        const { getByTestId } = render(renderComponent);

        fireEvent.press(getByTestId(buttonAddTestId));

        expect(onPressMock).toHaveBeenCalled();
    });

    it('should call onPress 2x', () => {
        const { getByTestId } = render(renderComponent);

        fireEvent.press(getByTestId(buttonAddTestId));
        fireEvent.press(getByTestId(buttonAddTestId));

        expect(onPressMock).toHaveBeenCalledTimes(2);
    });

    it('should render with the color, theme.colors.primary, when the button is enabled', () => {
        const { getByTestId } = render(renderComponent);

        const button = getByTestId(buttonAddTestId);

        expect(button.parent?.props.style.backgroundColor).toBe(theme.colors.primary);
    });

    it('should render with custom styles', () => {
        const { getByTestId } = render(
            <ButtonAdd
                onPress={onPressMock}
                style={{
                    backgroundColor: 'red',
                }}
            />,
        );

        const button = getByTestId(buttonAddTestId);

        expect(button.parent?.props.style.backgroundColor).toBe('red');
    });
});
