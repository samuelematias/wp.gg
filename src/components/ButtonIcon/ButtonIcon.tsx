import { ElementType } from 'react'

import { TouchableOpacityProps } from 'react-native';

import styled from 'styled-components/native';

import DiscordIcon from '../../assets/discord.png';

import { theme } from '../../global/styles';

type Props = TouchableOpacityProps & {
    label: string;
}

const Touchable = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
    width: 100%;
    height: 56px;
    background-color: ${theme.colors.primary};
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Text = styled.Text`
    flex: 1;
    color: ${theme.colors.heading};
    font-size: 15px;
    text-align: center;
    font-family: ${theme.fonts.text500};
`;

const IconWrapper = styled.View`
    width: 56px;
    height: 56px;
    justify-content: center;
    align-items: center;
    border-right-width: 1px;
    border-color: ${theme.colors.line};
`;

const Icon = styled.Image`
    width: 24px;
    height: 18px;
`;

export function ButtonIcon({ label, ...rest }: Props) {
    return (
        <Touchable<ElementType>
            {...rest}
        >
            <IconWrapper>
                <Icon source={DiscordIcon} />
            </IconWrapper>
            <Text >
                {label}
            </Text>
        </Touchable>
    );
}
