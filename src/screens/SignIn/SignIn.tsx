import { Alert } from 'react-native';

import styled from 'styled-components/native';

import {
    ButtonIcon,
    Loading,
} from '../../components';

import { useAuth } from '../../hooks';

import IllustrationImg from '../../assets/illustration.png';

import { theme } from '../../global/styles';

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Illustration = styled.Image`
    width: 100%;
    height: 360px;
    resize-mode: cover;
`;

const Content = styled.View`
    padding-horizontal: 50px;
`;

const Title = styled.Text`
    color: ${theme.colors.heading};
    text-align: center;
    font-size: 40px;
    margin-bottom: 16px;
    font-family: ${theme.fonts.title700};
    line-height: 40px;
`;

const SubTitle = styled.Text`
    color: ${theme.colors.heading};
    text-align: center;
    font-size: 15px;
    margin-bottom: 64px;
    font-family: ${theme.fonts.title600};
    line-height: 25px;
`;

const Footer = styled.View`
    margin-bottom: 50px;
`;

const LoadingWrapper = styled.View`
    width: 100%;
    height: 56px;
`;

export function SignIn() {
    const { loading, signIn } = useAuth();

    async function handleSignIn() {
        try {
            await signIn();
        } catch (error) {
            Alert.alert(error);
        }
    }

    const renderLoading = (
        <LoadingWrapper>
            <Loading size={'small'} />
        </LoadingWrapper>
    );


    const renderButton = (
        <ButtonIcon
            label="Entrar com Discord"
            onPress={handleSignIn}
        />
    )

    return (
        <Container>
            <Illustration source={IllustrationImg} />
            <Content>
                <Title>
                    Conecte-se {'\n'}
                    e organize suas {'\n'}
                    jogatinas
                </Title>
                <SubTitle>
                    Crie grupos para jogar seus games {'\n'}
                    favoritos com seus amigos
                </SubTitle>
                <Footer>
                    {
                        loading
                            ? renderLoading
                            : renderButton
                    }
                </Footer>
            </Content>
        </Container>
    );
}
