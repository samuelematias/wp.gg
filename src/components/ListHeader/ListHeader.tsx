import styled from 'styled-components/native';

import { theme } from '../../global/styles';

type ListHeaderProps = {
    title: string;
    subTitle: string;
};

const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding-horizontal: 24px;
`;

const Title = styled.Text`
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
    font-size: 18px;
`;

const SubTitle = styled.Text`
    font-family: ${theme.fonts.text400};
    color: ${theme.colors.highlight};
    font-size: 13px;
`;

export function ListHeader({ title, subTitle }: ListHeaderProps) {
    return (
        <Container>
            <Title>
                {title}
            </Title>

            <SubTitle>

                {subTitle}
            </SubTitle>
        </Container>
    );
}
