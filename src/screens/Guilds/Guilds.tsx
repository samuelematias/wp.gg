import { FlatList } from 'react-native';

import styled from 'styled-components/native';

import {
    Guild,
    GuildProps,
    ListDivider,
} from '../../components';

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}

const Container = styled.View`
    flex: 1;
    align-items: center;
    padding-top: 24px;
`;

const GuildList = styled(FlatList as new () => FlatList<GuildProps>)`
    width: 100%;
`

export function Guilds({ handleGuildSelect }: Props) {
    const guilds: GuildProps[] = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'image.png',
            owner: true,
        },
        {
            id: '2',
            name: 'Galera do Game',
            icon: 'image.png',
            owner: true,
        },
    ];
    return (
        <Container>
            <GuildList
                data={guilds}
                keyExtractor={(item: GuildProps) => item.id}
                renderItem={({ item }: { item: GuildProps }) => (
                    <Guild
                        data={item}
                        onPress={() => handleGuildSelect(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider />}
                contentContainerStyle={{ paddingBottom: 68 }}
            />
        </Container>
    );
}
