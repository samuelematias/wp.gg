import styled from 'styled-components/native';

import { theme } from '../../global/styles';

const Divider = styled.View`
    width: 78%;
    height: 1px;
    background-color: ${theme.colors.secondary40};
    margin-top: 2px;
    margin-vertical: 31px;
    align-self: flex-end;
`;

export function ListDivider() {
    return (
        <Divider />
    );
}
