import {
    TouchableOpacityProps,
    TextProps,
    ViewProps,
} from 'react-native';

import { SvgProps } from 'react-native-svg';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles';

type CategoryProps = TouchableOpacityProps & {
    title: string;
    icon: React.FC<SvgProps>;
    checked?: boolean;
};

interface ContentType extends ViewProps {
    checked: boolean;
}

export const Touchable = styled.TouchableOpacity<TouchableOpacityProps>`
    width: 104px;
    height: 120px;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
`;

const Content = styled.View<ContentType>`
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

const ContentChecked = styled.View<ContentType>`
    width: 10px;
    height: 10px;
    background-color: ${(props) => (props.checked ? theme.colors.primary : theme.colors.secondary100)};
    align-self: flex-end;
    margin-right: 7px;
    border-radius: 3px;
    border-width: 2px;
    border-color: ${(props) => (props.checked ? theme.colors.primary : 'transparent')};
`;

export const Title = styled.Text<TextProps>`
    color: ${theme.colors.heading};
    font-size: 15px;
    text-align: center;
`;



export const Gradient = styled(LinearGradient)`
`

// export const Gradient = styled(LinearGradient).attrs({
//     colors: ['white', 'transparent'],
//     start: { x: 0, y: 0.8 },
//     end: { x: 0.4, y: 0.8 },
// })`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
// `

// export const ButtonElement = styled(RectButton)`
//   width: 100%;
//   height: 100%;
//   justify-content: center;
//   align-items: center;
// `;

/* const ScrollViewCustom3 = styled(ScrollView).attrs((props) => ({
*     contentContainerStyle: [
*         [{ padding: 40 }, [[{ marginTop: 80 }]]],
*         props.contentContainerStyle
*     ],
* }))`
*     flex: 1;
*   `; */

export function Category({
    title,
    icon: Icon,
    checked = false,
    ...rest
}: CategoryProps) {
    const { secondary80, secondary100 } = theme.colors;

    return (
        <Touchable {...rest}>
            <Gradient colors={[secondary80, secondary100]}>
                <Content checked={checked}>
                    <ContentChecked checked={checked} />
                    <Icon width={48} height={48} />
                    <Title>{title}</Title>
                </Content>
            </Gradient>
        </Touchable>
    );
};
