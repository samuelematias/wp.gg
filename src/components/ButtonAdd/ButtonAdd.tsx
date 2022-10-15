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

const PlusIcon = styled(MaterialCommunityIcons).attrs({
    name: 'plus',
})`
    color: ${theme.colors.heading};
    font-size: 24px;
`;
export function ButtonAdd({ ...rest }: TouchableOpacityProps) {
    return (
        <Touchable
            activeOpacity={0.7}
            {...rest}
        >
            <PlusIcon />
        </Touchable>
    );
}
