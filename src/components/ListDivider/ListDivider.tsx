import { ViewProps } from 'react-native';

import styled from 'styled-components/native';

import { theme } from '../../global/styles';

type Props = {
    isCentered?: boolean;
}

interface IViewProps extends ViewProps {
    isCentered?: boolean;
}

const Divider = styled.View<IViewProps>`
    width: 78%;
    height: 1px;
    background-color: ${theme.colors.secondary40};
    margin-top: ${(props) => (props.isCentered ? '12px' : '2px')};
    margin-bottom: ${(props) => (props.isCentered ? '12px' : '31px')};
    align-self: flex-end;
`;

export function ListDivider({ isCentered }: Props) {
    return (
        <Divider
            isCentered={isCentered}
        />
    );
}
