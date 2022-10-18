import {
    useState,
    useEffect,
    useCallback,
} from 'react';

import * as Font from 'expo-font';
import {
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
} from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import styled from 'styled-components/native';

import { StatusBarColor } from './src/components';
import { AuthProvider } from './src/hooks';
import { Routes } from './src/routes';

import { theme } from './src/global/styles';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.secondary100};
`;

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);
    const { secondary100 } = theme.colors;

    useEffect(() => {
        async function prepare() {
            try {
                // Keep the splash screen visible while we fetch resources
                await SplashScreen.preventAutoHideAsync();

                // Pre-load fonts, make any API calls you need to do here
                await Font.loadAsync({
                    Inter_400Regular,
                    Inter_500Medium,
                    Inter_600SemiBold,
                    Inter_700Bold,
                });

            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setAppIsReady`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }
    return (
        <Container onLayout={onLayoutRootView}>
            <StatusBarColor
                barStyle="light-content"
                backgroundColor={secondary100}
            />
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </Container>
    );
}
