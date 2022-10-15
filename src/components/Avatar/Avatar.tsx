import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import { IMAGE_PLACEHOLDER } from '../../utils';

import { theme } from '../../global/styles';

type Props = {
    urlImage: string | undefined;
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

const StyledLinearGradient = styled(LinearGradient).attrs({
    colors: [theme.colors.secondary80, theme.colors.secondary100],
    start: { x: 0, y: 0.8 },
    end: { x: 0.4, y: 0.8 },
})`
    border-radius: 8px;
 `

export function Avatar({ urlImage }: Props) {

    return (
        <Container>
            <StyledLinearGradient>
                <Image
                    source={{ uri: urlImage ? urlImage : IMAGE_PLACEHOLDER }}
                />
            </StyledLinearGradient>
        </Container>
    );
}
