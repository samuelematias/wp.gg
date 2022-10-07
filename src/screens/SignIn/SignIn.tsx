import React from 'react';

import { ImageProps } from 'react-native';

import styled from 'styled-components/native';

import { ButtonIcon } from '../../components';

import IllustrationImg from '../../assets/illustration.png';

import { theme } from '../../global/styles';

/* const StatusBar = styled.StatusBar`
*   bar-style: light-content;
*   background-color: transparent;
*   translucent: true;
* `; */

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.secondary100};
  align-items: center;
  justify-content: center;
`;

const Illustration = styled.Image<ImageProps>`
  width: 100%;
  height: 360px;
  resize-mode: stretch;
`;

const Content = styled.View`
  padding-horizontal: 50px;
`;

const ContentTitle = styled.Text`
  color: ${theme.colors.heading};
  text-align: center;
  font-size: 40px;
  margin-bottom: 16px;
  font-family: ${theme.fonts.title700};
  line-height: 40px;
`;


const ContentSubTitle = styled.Text`
  color: ${theme.colors.heading};
  text-align: center;
  font-size: 15px;
  margin-bottom: 64px;
  font-family: ${theme.fonts.title500};
  line-height: 25px;
`;

export function SignIn() {
    return (
        <Container>
            <Illustration source={IllustrationImg} />
            <Content>
                <ContentTitle>
                    Conecte-se {'\n'}
                    e organize suas {'\n'}
                    jogatinas
                </ContentTitle>
                <ContentSubTitle>
                    Crie grupos para jogar seus games {'\n'}
                    favoritos com seus amigos
                </ContentSubTitle>
                <ButtonIcon
                    label="Entrar com Discord"
                    activeOpacity={0.7}
                />
            </Content>
        </Container>
    );
}
