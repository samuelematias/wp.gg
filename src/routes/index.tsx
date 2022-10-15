import {
    DefaultTheme,
    NavigationContainer
} from '@react-navigation/native';

import {
    SignIn
} from '../screens';

import { useAuth } from '../hooks';

import { AuthRoutes } from './auth.routes';

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
            {user?.id ? <AuthRoutes /> : <SignIn />}
        </NavigationContainer>
    )
}
