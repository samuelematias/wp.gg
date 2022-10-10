import { ReactNode } from 'react';

import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles';

type Props = {
    children: ReactNode;
}

const StyledLinearGradient = styled(LinearGradient).attrs({
    colors: [theme.colors.secondary80, theme.colors.secondary100],
})`
 `

export function Background({ children }: Props) {

    return (
        <StyledLinearGradient>
            {children}
        </StyledLinearGradient>
    );
}
