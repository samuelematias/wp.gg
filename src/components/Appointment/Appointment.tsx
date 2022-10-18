import {
    TouchableOpacityProps,
    TextProps,
} from 'react-native';

import styled from 'styled-components/native';

import { GuildIcon } from '../GuildIcon';
import { GuildProps } from '../Guild';

import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';

import { categories } from '../../utils';

import { theme } from '../../global/styles';

type Props = TouchableOpacityProps & {
    data: AppointmentProps;
}

export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
};

interface ITextProps extends TextProps {
    owner: boolean;
}

const Touchable = styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    align-self: center;
`;

const Content = styled.View`
    flex: 1;
    padding-top: 4px;
    padding-left: 20px;
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

const DateWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`;

const DateLabel = styled.Text`
    font-family: ${theme.fonts.text400};
    color: ${theme.colors.highlight};
    font-size: 13px;
    margin-left: 7px;
`;

const PlayerWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`;

const PlayerTitle = styled.Text<ITextProps>`
    font-family: ${theme.fonts.text500};
    color: ${(props) => (props.owner ? theme.colors.primary : theme.colors.on)};
    font-size: 13px;
    margin-left: 7px;
    margin-right: 24px;
`;

export function Appointment({ data, ...rest }: Props) {
    const { primary, on } = theme.colors;
    const { owner, name } = data.guild;
    const [category] = categories.filter(item => item.id === data.category);

    return (
        <Touchable {...rest}>
            <GuildIcon
                guildId={data.guild.id}
                iconId={data.guild.icon}
            />
            <Content>
                <Header>
                    <HeaderTitle>{name}</HeaderTitle>
                    <CategoryTitle>{category.title}</CategoryTitle>
                </Header>
                <Footer>
                    <DateWrapper>
                        <CalendarSvg
                            fill={primary}
                        />
                        <DateLabel>{data.date}</DateLabel>
                    </DateWrapper>
                    <PlayerWrapper>
                        <PlayerSvg fill={owner ? primary : on} />
                        <PlayerTitle owner={owner}>
                            {owner ? 'Anfitrião' : 'Visitante'}
                        </PlayerTitle>
                    </PlayerWrapper>
                </Footer>
            </Content>
        </Touchable>
    );
}
