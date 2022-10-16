import {
    useState,
    useCallback,
} from 'react';
import { FlatList } from 'react-native';

import styled from 'styled-components/native';
import {
    useNavigation,
    useFocusEffect,
} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { COLLECTION_APPOINTMENTS } from '../../configs/database';

import {
    Appointment,
    AppointmentProps,
    ButtonAdd,
    CategorySelect,
    Profile,
    ListDivider,
    ListHeader,
    Loading,
} from '../../components';

const Container = styled.View`
    flex: 1;
`;

const Header = styled.View`
    width: 100%;
    padding-horizontal: 24px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 26px;
    margin-bottom: 42px;
`;

const AppointmentList = styled(FlatList as new () => FlatList<AppointmentProps>)`
    margin-top: 24px;
    margin-left: 24px;
`

const FloatingButtonWrapper = styled.View`
    position: absolute;
    align-items: center;
    justify-content: center;
    bottom: 30px;
    right: 30px;
`;

export function Home() {
    const navigation = useNavigation();
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
    const totalAppointments = appointments.length;

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentCreate() {
        navigation.navigate('appointmentCreate');
    }

    function handleAppointmentDetails({
        id,
        guild,
        category,
        date,
        description
    }: AppointmentProps) {
        navigation.navigate(
            'appointmentDetails',
            {
                id,
                guild,
                category,
                date,
                description
            }
        );
    }

    async function loadAppointments() {
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

        if (category) {
            setAppointments(storage.filter(item => item.category === category));
        } else {
            setAppointments(storage)
        }

        setLoading(false);
    }

    useFocusEffect(useCallback(() => {
        loadAppointments();
    }, [category]));

    return (
        <Container>
            <Header>
                <Profile />
            </Header>
            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />
            {
                loading
                    ? <Loading />
                    : <>
                        <>
                            <ListHeader
                                title="Partidas agendadas"
                                subTitle={`Total ${totalAppointments}`}
                            />
                            <AppointmentList
                                data={appointments}
                                keyExtractor={(item: AppointmentProps) => item.id}
                                renderItem={({ item }: { item: AppointmentProps }) => (
                                    <Appointment
                                        data={item}
                                        onPress={() => handleAppointmentDetails(item)}
                                    />
                                )}
                                ItemSeparatorComponent={() => <ListDivider isCentered />}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{ paddingBottom: 69 }}
                            />
                        </>
                        <FloatingButtonWrapper>
                            <ButtonAdd onPress={handleAppointmentCreate} />
                        </FloatingButtonWrapper>
                    </>
            }
        </Container>
    );
}
