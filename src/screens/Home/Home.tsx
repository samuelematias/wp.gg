import styled from 'styled-components/native';

import { ButtonAdd, CategorySelect, Profile } from '../../components';

const Container = styled.View`
`;

const Content = styled.View`
`;

const Header = styled.View`
    width: 100%;
    padding-horizontal: 24px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 26px;
    margin-bottom: 42px;
`;

export function Home() {
    return (
        <Container>
            <Header>
                <Profile />
                <ButtonAdd
                    activeOpacity={0.7}
                />
            </Header>
            <Content>
                <CategorySelect />
            </Content>
        </Container>
    );
}
