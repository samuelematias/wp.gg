import { ElementType } from 'react'

import { StatusBarProps } from 'react-native';

import styled from 'styled-components/native';

type Props = StatusBarProps & {
    backgroundColor: string;
}

const StatusBar = styled.StatusBar.attrs({
    translucent: true
})``;

export function StatusBarColor({
    backgroundColor,
    ...rest
}: Props) {
    return (
        <StatusBar<ElementType>
            backgroundColor={backgroundColor}
            {...rest}
        />
    );
}
