import
React,
{ ReactNode }
    from 'react';

import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { theme } from '../../global/styles';

type Props = {
    title: string;
    action?: ReactNode;
};

const Container = styled.SafeAreaView`
    width: 100%;
    height: 104px;
    padding-horizontal: 24px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;


const Touchable = styled.TouchableOpacity`
`;

const Title = styled.Text`
    flex: 1;
    color: ${theme.colors.heading};
    font-size: 20px;
    text-align: center;
    font-family: ${theme.fonts.title700};
`;

const ActionWrapper = styled.View`
`;

export function Header({ title, action }: Props) {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <Container>
            <Touchable
                onPress={handleGoBack}
            >
                <Feather
                    name="chevron-left"
                    size={24}
                    color={theme.colors.heading}
                />
            </Touchable>

            <Title>{title}</Title>
            {action && <ActionWrapper>{action}</ActionWrapper>}
        </Container>
    );
}
