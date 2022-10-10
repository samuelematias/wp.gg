import { TouchableOpacityProps } from 'react-native';

import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from '../../global/styles';

const Touchable = styled.TouchableOpacity`
    width: 48px;
    height: 48px;
    background-color: ${theme.colors.primary};
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

export function ButtonAdd({ ...rest }: TouchableOpacityProps) {
    return (
        <Touchable {...rest}>
            <MaterialCommunityIcons
                name="plus"
                color={theme.colors.heading}
                size={24}
            />
        </Touchable>
    );
}
