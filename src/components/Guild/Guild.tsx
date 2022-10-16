import { TouchableOpacityProps } from 'react-native';

import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import { GuildIcon } from '../GuildIcon';

import { theme } from '../../global/styles';

export type GuildProps = {
    id: string;
    name: string;
    icon: string | null;
    owner: boolean;
}

type Props = TouchableOpacityProps & {
    data: GuildProps;
}

const Touchable = styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding-horizontal: 24px;
`;

const Content = styled.View`
    flex: 1;
    justify-content: center;
    padding-top: 20px;
    padding-left: 20px;
`;

const Title = styled.Text`
    font-size: 18px;
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
    margin-bottom: 11px;
`;

const SubTitle = styled.Text`
    font-size: 13px;
    font-family: ${theme.fonts.text400};
    color: ${theme.colors.highlight};
    margin-bottom: 24px;
`;

const ChevronRightIcon = styled(Feather).attrs({
    name: 'chevron-right',
})`
    color: ${theme.colors.heading};
    font-size: 18px;
`;

export function Guild({ data, ...rest }: Props) {
    return (
        <Touchable
            activeOpacity={0.7}
            {...rest}
        >
            <GuildIcon
                guildId={data.id}
                iconId={data.icon}
            />
            <Content>
                <Title>{data.name}</Title>
                <SubTitle>{data.owner ? 'Administrador' : 'Convidado'}</SubTitle>
            </Content>
            <ChevronRightIcon />
        </Touchable>
    );
}
