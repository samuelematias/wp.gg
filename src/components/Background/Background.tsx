import { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles';

type BackgroundProps = {
    children: ReactNode;
}


export function Background({ children }: BackgroundProps) {
    const { secondary80, secondary100 } = theme.colors;

    return (
        <LinearGradient colors={[secondary80, secondary100]}>
            {children}
        </LinearGradient>
    );
}
