import {
    TouchableOpacityProps,
    ViewProps,
} from 'react-native';

import styled from 'styled-components/native';
import { SvgProps } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles';

type Props = TouchableOpacityProps & {
    title: string;
    icon: React.FC<SvgProps>;
    checked?: boolean;
};

interface IViewProps extends ViewProps {
    checked: boolean;
}

const Touchable = styled.TouchableOpacity`
    width: 104px;
    height: 120px;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
`;

const Content = styled.View<IViewProps>`
    width: 104px;
    height: 120px;
    background-color: theme.colors.secondary40;
    border-radius: 8px;
    align-items: center;
    justify-content: space-between;
    padding-vertical: 7px;
    opacity: ${(props) => (props.checked ? '1' : '0.4')};
    };
`;

const Checkbox = styled.View<IViewProps>`
    width: 10px;
    height: 10px;
    background-color: ${(props) => (props.checked ? theme.colors.primary : theme.colors.secondary100)};
    align-self: flex-end;
    margin-right: 7px;
    border-radius: 3px;
    border-width: 2px;
    border-color: ${(props) => (props.checked ? theme.colors.primary : 'transparent')};
`;

const Label = styled.Text`
    color: ${theme.colors.heading};
    font-size: 15px;
    text-align: center;
`;



const StyledLinearGradient = styled(LinearGradient).attrs({
    colors: [theme.colors.secondary80, theme.colors.secondary100],
})`
 `

export function Category({
    title,
    icon: Icon,
    checked = false,
    ...rest
}: Props) {

    return (
        <Touchable {...rest}>
            <StyledLinearGradient>
                <Content checked={checked}>
                    <Checkbox checked={checked} />
                    <Icon width={48} height={48} />
                    <Label>{title}</Label>
                </Content>
            </StyledLinearGradient>
        </Touchable>
    );
};
