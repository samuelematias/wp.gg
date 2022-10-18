import styled from 'styled-components/native';

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
    background-color: ${theme.colors.primary};
`;

const Image = styled.Image`
    width: 46px;
    height: 46px;
    border-radius: 8px;
`;

export function Avatar({ urlImage }: Props) {

    return (
        <Container>
            <Image
                source={{ uri: urlImage ? urlImage : IMAGE_PLACEHOLDER }}
            />
        </Container>
    );
}
