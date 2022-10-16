import {
    DefaultTheme,
    NavigationContainer
} from '@react-navigation/native';

import {
    SignIn
} from '../screens';

import { useAuth } from '../hooks';

import { AppRoutes } from './app.routes';

import { theme } from '../global/styles';

export function Routes() {
    const { user } = useAuth();

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
            {user?.id ? <AppRoutes /> : <SignIn />}
        </NavigationContainer>
    )
}
