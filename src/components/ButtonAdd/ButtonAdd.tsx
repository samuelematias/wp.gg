import { TouchableOpacityProps } from 'react-native';

import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from '../../global/styles';

export const Touchable = styled.TouchableOpacity<TouchableOpacityProps>`
    width: 48px;
    height: 48px;
    background-color: ${theme.colors.primary};
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

export function ButtonAdd({ ...props }: TouchableOpacityProps) {
    return (
        <Touchable {...props}>
            <MaterialCommunityIcons
                name="plus"
                color={theme.colors.heading}
                size={24}
            />
        </Touchable>
    );
}