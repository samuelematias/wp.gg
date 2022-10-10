import {
    TouchableOpacityProps,
    TextProps,
} from 'react-native';

import styled from 'styled-components/native';

import { GuildIcon } from '../GuildIcon';

import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';

import { categories } from '../../utils';

import { theme } from '../../global/styles';

type Props = TouchableOpacityProps & {
    data: AppointementProps;
}

export type GuildProps = {
    id: string;
    name: string;
    icon: string | null;
    owner: boolean;
};

export type AppointementProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
};

interface PlayerTitleType extends TextProps {
    owner: boolean;
}

export const Touchable = styled.TouchableOpacity<TouchableOpacityProps>`
    width: 100%;
    flex-direction: row;
    align-self: center;
`;

const Content = styled.View`
    flex: 1;
`;

const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 12px;
`;

const HeaderTitle = styled.Text`
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
    font-size: 18px;
`;

const CategoryTitle = styled.Text`
    font-family: ${theme.fonts.text400};
    color: ${theme.colors.highlight};
    font-size: 13px;
    margin-right: 24px;
`;

const Footer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

const DateInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

const DateLabel = styled.Text`
    font-family: ${theme.fonts.text400};
    color: ${theme.colors.highlight};
    font-size: 13px;
    margin-left: 7px;
`;

const PlayerInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

const PlayerTitle = styled.Text<PlayerTitleType>`
    font-family: ${theme.fonts.text500};
    color: ${(props) => (props.owner ? theme.colors.primary : theme.colors.on)};
    font-size: 13px;
    margin-left: 7px;
    margin-right: 24px;
`;

export function Appointment({ data, ...rest }: Props) {
    const guildDefaultIcon = 'https://i.imgur.com/6Y5uYMJ.png';
    const icon = data.guild.icon ? data.guild.icon : guildDefaultIcon;
    const [category] = categories.filter(item => item.id === data.category);
    const { owner, name } = data.guild;
    const { primary, on } = theme.colors;

    return (
        <Touchable {...rest}>
            <GuildIcon urlImage={icon} />
            <Content>
                <Header>
                    <HeaderTitle>{name}</HeaderTitle>
                    <CategoryTitle>{category.title}</CategoryTitle>
                </Header>
                <Footer>
                    <DateInfo>
                        <CalendarSvg
                            fill={primary}
                        />
                        <DateLabel>{data.date}</DateLabel>
                    </DateInfo>
                    <PlayerInfo>
                        <PlayerSvg fill={owner ? primary : on} />
                        <PlayerTitle owner={owner}>
                            {owner ? 'Anfitrião' : 'Visitante'}
                        </PlayerTitle>
                    </PlayerInfo>
                </Footer>
            </Content>
        </Touchable>
    );
}
