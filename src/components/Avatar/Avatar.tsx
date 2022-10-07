import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles';

type AvatarProps = {
    urlImage: string;
};

const Container = styled.View`
    width: 49px;
    height: 49px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin-right: 22px;
`;

const Image = styled.Image`
    width: 46px;
    height: 46px;
    border-radius: 8px;
`;

export function Avatar({ urlImage }: AvatarProps) {
    const { secondary80, secondary100 } = theme.colors;

    return (
        <Container>
            <LinearGradient style={{ borderRadius: 8 }} colors={[secondary80, secondary100]}>
                <Image
                    source={{ uri: urlImage }}
                />
            </LinearGradient>
        </Container>
    );
}
