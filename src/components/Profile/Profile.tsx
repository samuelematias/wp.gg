import styled from 'styled-components/native';

import { Avatar } from '../Avatar';

import { theme } from '../../global/styles';

const Container = styled.View`
    flex-direction: row;
    align-items: center;
`;

const Content = styled.View`
`;

const UserContent = styled.View`
    flex-direction: row;
`;

const UserGreeting = styled.Text`
    font-family: ${theme.fonts.title500};
    font-size: 24px;
    color: ${theme.colors.heading};
    margin-right: 6px;
`;

const UseName = styled.Text`
    font-family: ${theme.fonts.title700};
    font-size: 24px;
    color: ${theme.colors.heading};
`;

const Message = styled.Text`
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.highlight};
`;

export function Profile() {
    return (
        <Container>
            <Avatar
                urlImage="https://github.com/samuelematias.png"
            />
            <Content>
                <UserContent>
                    <UserGreeting>
                        Olá,
                    </UserGreeting>
                    <UseName>
                        Samuel
                    </UseName>
                </UserContent>
                <Message>
                    Hoje é dia de vitória
                </Message>
            </Content>
        </Container>
    );
}