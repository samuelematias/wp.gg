import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import {
    ButtonIcon,
    StatusBarColor,
} from '../../components';

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
  font-family: ${theme.fonts.title500};
  line-height: 25px;
`;

const ButtonWrapper = styled.View`
  margin-bottom: 50px;
`;

export function SignIn() {
    const { secondary100 } = theme.colors;
    const navigation = useNavigation();


    function handleSignIn() {
        navigation.navigate('home');
    }

    return (
        <Container>
            <StatusBarColor
                barStyle="light-content"
                backgroundColor={secondary100}
            />
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
                <ButtonWrapper>
                    <ButtonIcon
                        label="Entrar com Discord"
                        onPress={handleSignIn}
                    />
                </ButtonWrapper>
            </Content>
        </Container>
    );
}
