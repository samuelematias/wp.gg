import { useState } from 'react';
import { FlatList } from 'react-native';

import styled from 'styled-components/native';

import {
    Appointment,
    AppointementProps,
    ButtonAdd,
    CategorySelect,
    Profile,
    ListDivider,
    ListHeader,
} from '../../components';

/* type Props = FlatListProps<AppointmentProps> & {
*     categorySelected: string;
*     setCategory: (categoryId: string) => void;
*     handleAppointmentDetails: (guildSelected: GuildProps) => void;
*     handleAppointmentCreate: () => void;
* }; */

/* type AppointmentProps = {
*     id: string;
*     guild: {
*         id: string;
*         name: string;
*         icon: string | null;
*         owner: boolean;
*     };
*     category: string;
*     date: string;
*     description: string;
* }; */

const Container = styled.View`
`;

const Content = styled.View`
`;

const Header = styled.View`
    width: 100%;
    padding-horizontal: 24px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 26px;
    margin-bottom: 42px;
`;

/* const List = styled.FlatList.attrs({
*     contentContainerStyle: { paddingBottom: 69 },
*     showsVerticalScrollIndicator: false,
* })`
*     padding: 0 24px;
* `; */

const List = styled(FlatList as new () => FlatList<AppointementProps>)`
    margin-top: 24px;
    margin-left: 24px;
`

export function Home() {
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
            <Content>
                <ListHeader
                    title="Partidas agendadas"
                    subTitle="Total 6"
                />
                <List<React.ElementType>
                    data={appointments}
                    keyExtractor={(item: AppointementProps) => item.id}
                    renderItem={({ item }: { item: AppointementProps }) => (
                        <Appointment data={item} />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    showsVerticalScrollIndicator={false}
                />
            </Content>
        </Container>
    );
}
