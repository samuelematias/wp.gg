import {
    ElementType,
    useState,
    useEffect,
} from 'react';
import {
    FlatList,
    Alert,
    Share,
    Platform,
} from 'react-native';

import styled from 'styled-components/native';
import { Fontisto } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import {
    ButtonIcon,
    Header,
    ListHeader,
    ListDivider,
    Member,
    MemberProps,
    AppointmentProps,
    Loading,
} from '../../components';

import { api } from '../../services';

import { theme } from '../../global/styles';

type GuildWidget = {
    id: string;
    name: string;
    instant_invite: string;
    members: MemberProps[];
}

const Container = styled.SafeAreaView`
    flex: 1;
`;

const Touchable = styled.TouchableOpacity``;

const ShareIcon = styled(Fontisto).attrs({
    name: 'share',
})`
    color: ${theme.colors.primary};
    font-size: 24px;
`;

const BannerContent = styled.View`
    flex: 1;
    justify-content: flex-end
    padding-horizontal: 24px;
    margin-bottom: 30px;
`;

const Banner = styled.ImageBackground.attrs({
    source: require('../../assets/banner.png'),
    resizeMode: 'stretch',
})`
    width: 100%;
    height: 234px;
`;

const Title = styled.Text`
    color: ${theme.colors.heading};
    font-size: 28px;
    font-family: ${theme.fonts.title700};
    line-height: 34px;
    margin-top: 28px;
`;

const Subtitle = styled.Text`
    color: ${theme.colors.heading};
    font-size: 13px;
    font-family: ${theme.fonts.text400};
    line-height: 21px;
    margin-top: 11px;
`;

const MemberList = styled(FlatList as new () => FlatList<MemberProps>)`
    margin-top: 27px;
    margin-left: 24px;
`
const Footer = styled.View`
    padding: 20px 24px;
`;

const WidgetErroContent = styled.View`
    flex: 1;
    padding-horizontal: 24px;
    margin-bottom: 30px;
`;

export function AppointmentDetails() {
    const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
    const isWidgetUnavailable = widget.members === undefined;
    const [loading, setLoading] = useState(true);
    const route = useRoute();
    const { guild, description } = route.params as AppointmentProps;
    const imOwnerThisServer = guild.owner;

    function handleShareInvitation() {
        const message = Platform.OS === 'ios'
            ? `Junte-se a ${guild.name}`
            : widget.instant_invite;

        Share.share({
            message,
            url: widget.instant_invite
        });
    }

    function handleOpenGuild() {
        Linking.openURL(widget.instant_invite);
    }

    async function fetchGuildWidget() {
        try {
            const response = await api.get(`/guilds/${guild.id}/widget.json`);
            setWidget(response.data);
        } catch {
            Alert.alert('Verifique as configura????es do servidor. Ser?? que o Widget est?? habilitado?');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchGuildWidget();
    }, []);


    const renderShareButton = (
        <Touchable
            onPress={handleShareInvitation}
        >
            <ShareIcon name="share" size={24} />
        </Touchable>
    );

    const renderWidgetUnavailable = (
        <WidgetErroContent>
            <Title>Ops...</Title>
            <Subtitle>
                Parece que o servidor n??o possui um Widget configurado, ent??o n??o ser?? poss??vel acessar a lista de membros desse servidor.
            </Subtitle>
        </WidgetErroContent>
    );

    const renderBody = (
        isWidgetUnavailable
            ? renderWidgetUnavailable
            : <>
                <ListHeader
                    title="Jogadores"
                    subTitle={`Total ${widget.members.length}`}
                />
                <MemberList
                    data={widget.members}
                    keyExtractor={(item: MemberProps) => item.id}
                    renderItem={({ item }: { item: MemberProps }) => (
                        <Member data={item} />
                    )}
                    ItemSeparatorComponent={() => <ListDivider isCentered />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 48 }}
                />
            </>
    );

    const renderFooter = (
        <Footer>
            <ButtonIcon
                label="Entrar na partida"
                onPress={handleOpenGuild}
            />
        </Footer>
    );

    return (
        <Container>
            <Header
                title="Detalhes"
                action={imOwnerThisServer && renderShareButton}
            />
            <Banner<ElementType>>
                <BannerContent>
                    <Title>
                        {guild.name}
                    </Title>
                    <Subtitle>
                        {description}
                    </Subtitle>
                </BannerContent>
            </Banner>
            {loading
                ? <Loading />
                : renderBody
            }
            {imOwnerThisServer && renderFooter}
        </Container>
    );
}
