import { useState } from 'react';
import { FlatList } from 'react-native';

import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import {
    Appointment,
    AppointementProps,
    ButtonAdd,
    CategorySelect,
    Profile,
    ListDivider,
    ListHeader,
} from '../../components';

const Container = styled.View`
`;

const Header = styled.View`
    width: 100%;
    padding-horizontal: 24px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 26px;
    margin-bottom: 42px;
`;

const ListWrapper = styled.View`
`;

const StyledFlatList = styled(FlatList as new () => FlatList<AppointementProps>)`
    margin-top: 24px;
    margin-left: 24px;
`

export function Home() {
    const navigation = useNavigation();
    const [category, setCategory] = useState('');

    const appointments: AppointementProps[] = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: "https://github.com/samuelematias.png",
                owner: true,
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'LOL',
                icon: "https://github.com/samuelematias.png",
                owner: false,
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
        },
    ];

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails() {
        navigation.navigate('appointmentDetails');
    }

    return (
        <Container>
            <Header>
                <Profile />
                <ButtonAdd
                    activeOpacity={0.7}
                />
            </Header>
            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />
            <ListWrapper>
                <ListHeader
                    title="Partidas agendadas"
                    subTitle="Total 6"
                />
                <StyledFlatList<React.ElementType>
                    data={appointments}
                    keyExtractor={(item: AppointementProps) => item.id}
                    renderItem={({ item }: { item: AppointementProps }) => (
                        <Appointment
                            data={item}
                            onPress={handleAppointmentDetails}
                        />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    showsVerticalScrollIndicator={false}
                />
            </ListWrapper>
        </Container>
    );
}
