import React from 'react';
import {
    TouchableOpacityProps,
    TextProps,
    ImageProps,
} from 'react-native';

import styled from 'styled-components/native';

import DiscordIcon from '../../assets/discord.png';

import { theme } from '../../global/styles';

type ButtonIconProps = TouchableOpacityProps & {
    label: string;
}

export const Touchable = styled.TouchableOpacity<TouchableOpacityProps>`
    width: 100%;
    height: 56px;
    background-color: ${theme.colors.primary};
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text<TextProps>`
    flex: 1;
    color: ${theme.colors.heading};
    font-size: 15px;
    text-align: center;
`;

export const IconWrapper = styled.View`
    width: 56px;
    height: 56px;
    justify-content: center;
    align-items: center;
    border-right-width: 1px;
    border-color: ${theme.colors.line};
`;

const Icon = styled.Image<ImageProps>`
    width: 24px;
    height: 18px;
`;

export function ButtonIcon({ label, ...rest }: ButtonIconProps) {
    return (
        <Touchable {...rest}>
            <IconWrapper>
                <Icon source={DiscordIcon} />
            </IconWrapper>
            <Text >
                {label}
            </Text>
        </Touchable>
    );
}
