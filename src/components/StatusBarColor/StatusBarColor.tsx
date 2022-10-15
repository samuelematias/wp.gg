import { StatusBarProps } from 'react-native';

import styled from 'styled-components/native';

type Props = StatusBarProps & {
    backgroundColor: string;
}

const StatusBar = styled.StatusBar`
`;

export function StatusBarColor({
    backgroundColor,
    ...rest
}: Props) {
    return (
        <StatusBar
            translucent
            backgroundColor={backgroundColor}
            {...rest}
        />

    );
}
