import styled from 'styled-components/native';

const { CDN_IMAGE } = process.env;

import DiscordSvg from '../../assets/discord.svg';

import { theme } from '../../global/styles';

type Props = {
    guildId: string;
    iconId: string | null;
}

const Container = styled.View`
    width: 62px;
    height: 62px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
    overflow: hidden;
`;

const Image = styled.Image.attrs({
    resizeMode: 'cover',
})`
    width: 64px;
    height: 64px;
`;

const DiscordIcon = styled(DiscordSvg)`
    width: 40px;
    height: 40px;
`;

export function GuildIcon({ guildId, iconId }: Props) {
    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

    return (
        <Container>
            {
                iconId
                    ? <Image
                        source={{ uri }}
                        testID={'GuildIcon.image.testId'}
                    />
                    : <DiscordIcon
                        testID={'GuildIcon.image.placeholder.testId'}
                    />
            }
        </Container>
    );
}
