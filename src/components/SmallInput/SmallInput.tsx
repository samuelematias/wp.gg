import { ElementType } from 'react';

import { TextInputProps } from 'react-native'

import styled from 'styled-components/native';

import { theme } from '../../global/styles';

const InputNumeric = styled.TextInput.attrs({
    keyboardType: 'numeric'
})`
    width: 48px;
    height: 48px;
    background-color: ${theme.colors.secondary40};
    color: ${theme.colors.heading};
    font-family: ${theme.fonts.text400};
    border-radius: 8px;
    font-size: 13px;
    margin-right: 4px;
    text-align: center;
`;

const DismissKeyboard = styled.ScrollView.attrs({
    keyboardShouldPersistTaps: 'handled'
})`
    width: 100%;
    height: 100%;
`;

export function SmallInput({ ...rest }: TextInputProps) {
    return (
        <DismissKeyboard >
            <InputNumeric<ElementType>
                {...rest}
            />
        </DismissKeyboard>
    );
}
