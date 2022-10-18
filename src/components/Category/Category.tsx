import { ElementType } from 'react'

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
    hasCheckBox?: boolean;
    checked?: boolean;
};

interface IViewProps extends ViewProps {
    checked: boolean;
}

const Touchable = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
    width: 104px;
    height: 120px;
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
    padding-vertical: 20px;
    opacity: ${(props) => (props.checked ? '1' : '0.4')};
    };
`;

const Checkbox = styled.View<IViewProps>`
    position: absolute;
    top: 7px;
    right: 7px;
    width: 10px;
    height: 10px;
    background-color: ${(props) => (props.checked ? theme.colors.primary : theme.colors.secondary100)};
    border-radius: 3px;
    border-width: 2px;
    border-color: ${(props) => (props.checked ? theme.colors.primary : 'transparent')};
`;

const Label = styled.Text`
    color: ${theme.colors.heading};
    font-family: ${theme.fonts.title700};
    font-size: 15px;
    text-align: center;
    margin-top: 16px;
`;

const StyledLinearGradient = styled(LinearGradient).attrs({
    colors: [theme.colors.secondary80, theme.colors.secondary100],
})`
    border-radius: 8px;
`;

export function Category({
    title,
    icon: Icon,
    hasCheckBox = false,
    checked = false,
    ...rest
}: Props) {

    return (
        <Touchable<ElementType>
            {...rest}
        >
            <StyledLinearGradient>
                <Content checked={checked}>
                    {hasCheckBox && <Checkbox checked={checked} />}
                    <Icon width={48} height={48} />
                    <Label>{title}</Label>
                </Content>
            </StyledLinearGradient>
        </Touchable>
    );
};
