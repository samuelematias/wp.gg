import { ElementType } from 'react';
import { FlatList } from 'react-native';

import styled from 'styled-components/native';
import { Fontisto } from '@expo/vector-icons';

import {
    ButtonIcon,
    Header,
    ListHeader,
    ListDivider,
    Member,
    MemberProps,
} from '../../components';

import { theme } from '../../global/styles';


const Container = styled.SafeAreaView`
    flex: 1;
`;

const Touchable = styled.TouchableOpacity`
`;

const Icon = styled(Fontisto)`
    color: ${theme.colors.primary};
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
    margin-bottom: 30px;
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

const StyledFlatList = styled(FlatList as new () => FlatList<MemberProps>)`
    margin-top: 27px;
    margin-left: 24px;
`
const Footer = styled.View`
    padding: 20px 24px;
`;
export function AppointmentDetails() {
    const { primary } = theme.colors;
    const members: MemberProps[] = [
        {
            id: '1',
            userName: 'samuca',
            avatarUrl: 'https://github.com/samuelematias.png',
            status: 'online',
        },
        {
            id: '2',
            userName: 'Aldo',
            avatarUrl: 'https://github.com/samuelematias.png',
            status: 'offline',
        },
    ];

    const renderShareButton = (
        <Touchable>
            <Icon name="share" size={24} color={primary} />
        </Touchable>
    );

    return (
        <Container>
            <Header
                title="Detalhes"
                action={renderShareButton}
            />
            <Banner<ElementType>>
                <BannerContent>
                    <Title>
                        Lendários
                    </Title>
                    <Subtitle>
                        É hoje que vamos chegar ao challenger sem perder uma partida da md10
                    </Subtitle>
                </BannerContent>
            </Banner>
            <ListHeader
                title="Jogadores"
                subTitle="Total 2"
            />
            <StyledFlatList<ElementType>
                data={members}
                keyExtractor={(item: MemberProps) => item.id}
                renderItem={({ item }: { item: MemberProps }) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
            />
            <Footer>
                <ButtonIcon
                    label="Entrar na partida"
                />
            </Footer>
        </Container>
    );
}
