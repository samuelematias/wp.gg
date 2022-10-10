import styled from 'styled-components/native';

import { theme } from '../../global/styles';

const Container = styled.View`
    width: 80%;
    height: 1px;
    background-color: ${theme.colors.secondary40};
    margin-vertical: 21px;
    align-self: flex-end;
`;

export function ListDivider() {
    return (
        <Container />
    );
}
