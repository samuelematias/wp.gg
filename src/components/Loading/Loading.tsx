import {
    ActivityIndicatorProps,
    ViewProps,
} from 'react-native';

import styled from 'styled-components/native';

import { theme } from '../../global/styles';

type Props = ActivityIndicatorProps & {
    size?: 'small' | 'large';
}

interface IViewProps extends ViewProps {
    isSmall: boolean;
}

const Container = styled.View<IViewProps>`
    flex: ${(props) => (props.isSmall ? '0' : '1')};
    align-items: center;
    justify-content: center;
`;

const LoadingIndicator = styled.ActivityIndicator.attrs(props => ({
    size: props.size || 'large',
    color: theme.colors.primary,
}))``;

export function Loading({ size, ...rest }: Props) {
    return (
        <Container
            isSmall={size === 'small'}
        >
            <LoadingIndicator<React.ElementType>
                size={size}
                {...rest}
            />
        </Container>
    );
}
