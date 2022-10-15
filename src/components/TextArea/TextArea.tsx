import { ElementType } from 'react';

import { TextInputProps } from 'react-native'

import styled from 'styled-components/native';

import { theme } from '../../global/styles';

const Input = styled.TextInput`
    width: 100%;
    height: 95px;
    background-color: ${theme.colors.secondary40};
    color: ${theme.colors.heading};
    font-family: ${theme.fonts.text400};
    border-radius: 8px;
    font-size: 13px;
    margin-right: 4px;
    text-align: center;
`;

export function TextArea({ ...rest }: TextInputProps) {
    return (
        <Input<ElementType>
            {...rest}
        />
    );
}
