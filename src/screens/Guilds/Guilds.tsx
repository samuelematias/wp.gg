import {
    useState,
    useEffect,
} from 'react';

import { FlatList } from 'react-native';

import styled from 'styled-components/native';

import { api } from '../../services';
import {
    Guild,
    GuildProps,
    ListDivider,
    Loading,
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
    const [guilds, setGuilds] = useState<GuildProps[]>([]);
    const [loading, setLoading] = useState(true);

    async function fetchGuilds() {
        const response = await api.get('/users/@me/guilds');

        setGuilds(response.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchGuilds();
    }, []);

    return (
        <Container>
            {
                loading
                    ? <Loading />
                    : <GuildList
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
            }
        </Container>
    );
}
