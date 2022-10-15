import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    AppointmentCreate,
    AppointmentDetails,
    Home,
    SignIn
} from '../screens';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator screenOptions={{
            headerShown: false,
        }}>
            <Screen
                name="signin"
                component={SignIn}
            />
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="appointmentDetails"
                component={AppointmentDetails}
            />
            <Screen
                name="appointmentCreate"
                component={AppointmentCreate}
            />
        </Navigator>
    );
}
