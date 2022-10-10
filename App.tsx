import {
    useState,
    useEffect,
    useCallback,
} from 'react';
import { ViewProps } from 'react-native';

import * as Font from 'expo-font';
import {
    Inter_400Regular,
    Inter_500Medium,
} from '@expo-google-fonts/inter';
import {
    Rajdhani_500Medium,
    Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';
import * as SplashScreen from 'expo-splash-screen';
import styled from 'styled-components/native';

import { Routes } from './src/routes';

import { theme } from './src/global/styles';

/* const StatusBar = styled.StatusBar`
*   bar-style: light-content;
*   background-color: transparent;
*   translucent: true;
* `; */

const Container = styled.SafeAreaView<ViewProps>`
  flex: 1;
  background-color: ${theme.colors.secondary100};
`;

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                // Keep the splash screen visible while we fetch resources
                await SplashScreen.preventAutoHideAsync();

                // Pre-load fonts, make any API calls you need to do here
                await Font.loadAsync({
                    Inter_400Regular,
                    Inter_500Medium,
                    Rajdhani_500Medium,
                    Rajdhani_700Bold,
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
            <Routes />
        </Container>
    );
}
