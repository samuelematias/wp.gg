import { ElementType } from 'react'

import { TouchableOpacityProps } from 'react-native';

import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from '../../global/styles';

const Touchable = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
    width: 60px;
    height: 60px;
    background-color: ${theme.colors.primary};
    border-radius: 30px;
    align-items: center;
    justify-content: center;
`;

const PlusIcon = styled(MaterialCommunityIcons).attrs({
    name: 'plus',
})`
    color: ${theme.colors.heading};
    font-size: 30px;
`;

const Container = styled.View``;

export function ButtonAdd({ ...rest }: TouchableOpacityProps) {
    return (
        <Touchable<ElementType>
            {...rest}
            testID={'button-add'}
        >
            <Container
                testID={'button-add-icon'}
            >
                <PlusIcon />
            </Container>
        </Touchable>
    );
}
