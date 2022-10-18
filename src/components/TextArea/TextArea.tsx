import { ElementType } from 'react';

import { TextInputProps } from 'react-native'

import styled from 'styled-components/native';

import { theme } from '../../global/styles';

const Input = styled.TextInput`
    width: 100%;
    height: 95px;
    background-color: ${theme.colors.secondary100};
    color: ${theme.colors.heading};
    font-family: ${theme.fonts.text400};
    border-radius: 8px;
    font-size: 13px;
    margin-right: 4px;
    border-width: 1px;
    border-color: ${theme.colors.primary};
    padding: 16px;
    text-align-vertical: top;
`;

export function TextArea({ ...rest }: TextInputProps) {
    return (
        <Input<ElementType>
            {...rest}
        />
    );
}
