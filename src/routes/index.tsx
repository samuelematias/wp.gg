import {
    DefaultTheme,
    NavigationContainer
} from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';

import { theme } from '../global/styles';

export function Routes() {
    const navTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: theme.colors.secondary100,
        },
    };
    return (
        <NavigationContainer
            theme={navTheme}
        >
            <AuthRoutes />
        </NavigationContainer>
    )
}
