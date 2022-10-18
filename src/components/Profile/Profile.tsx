import { Alert } from 'react-native';

import styled from 'styled-components/native';

import { useAuth } from '../../hooks';
import { Avatar } from '../Avatar';

import { theme } from '../../global/styles';

const Container = styled.View`
    flex-direction: row;
    align-items: center;
`;

const Content = styled.View``;

const UserWrapper = styled.View`
    flex-direction: row;
`;

const UserGreeting = styled.Text`
    font-family: ${theme.fonts.title600};
    font-size: 24px;
    color: ${theme.colors.heading};
    margin-right: 6px;
`;

const UserName = styled.Text`
    font-family: ${theme.fonts.title700};
    font-size: 24px;
    color: ${theme.colors.heading};
`;

const Message = styled.Text`
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.highlight};
`;

const Touchable = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})``;

export function Profile() {
    const { user, signOut } = useAuth();

    function handleSignOut() {
        Alert.alert('Logout', 'Deseja sair do wp.gg?',
            [
                {
                    text: 'Não',
                    style: 'cancel'
                },
                {
                    text: 'Sim',
                    onPress: () => signOut()
                }
            ])
    }

    return (
        <Container>
            <Touchable onPress={handleSignOut}>
                <Avatar urlImage={user?.avatar} />
            </Touchable>
            <Content>
                <UserWrapper>
                    <UserGreeting>
                        Olá,
                    </UserGreeting>
                    <UserName>
                        {user?.firstName}
                    </UserName>
                </UserWrapper>
                <Message>
                    Hoje é dia de vitória!!!
                </Message>
            </Content>
        </Container>
    );
}
