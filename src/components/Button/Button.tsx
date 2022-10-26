import { ElementType } from 'react'

import { TouchableOpacityProps } from 'react-native';

import styled from 'styled-components/native';

import { theme } from '../../global/styles';

type Props = TouchableOpacityProps & {
    label: string;
    disabled?: boolean;
}

const Touchable = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
    accessibilityRole: 'button',
})`
    width: 100%;
    height: 56px;
    background-color: ${(props) => (props.disabled ? theme.colors.highlight : theme.colors.primary)};
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Text = styled.Text`
    flex: 1;
    color: ${theme.colors.heading};
    font-size: 15px;
    text-align: center;
    font-family: ${theme.fonts.text500};
`;

export function Button({
    label,
    disabled = false,
    ...rest
}: Props) {
    return (
        <Touchable<ElementType>
            disabled={disabled}
            testID={'Button.testId'}
            {...rest}
        >
            <Text
                testID={'Button.label.testId'}
            >
                {label}
            </Text>
        </Touchable>
    );
}
