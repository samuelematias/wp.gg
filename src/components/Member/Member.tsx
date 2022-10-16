import {
    ViewProps,
} from 'react-native';

import styled from 'styled-components/native';

import { Avatar } from '../Avatar';

import { theme } from '../../global/styles';

export type MemberProps = {
    id: string;
    username: string;
    avatar_url: string;
    status: string;
}

type Props = {
    data: MemberProps;
}

interface IViewProps extends ViewProps {
    online: boolean;
}

const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

const Title = styled.Text`
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
    font-size: 18px;
`;

const StatusWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`;

const Status = styled.View<IViewProps>`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${(props) => (props.online ? theme.colors.on : theme.colors.primary)};
    margin-right: 9px;
`;

const StatusName = styled.Text`
    font-family: ${theme.fonts.text400};
    color: ${theme.colors.highlight};
    font-size: 13px;
`;

const UserInfoWrapper = styled.View`
`;
export function Member({ data }: Props) {
    const isOnline = data.status === 'online';
    return (
        <Container>
            <Avatar
                urlImage={data.avatar_url}
            />
            <UserInfoWrapper>
                <Title>
                    {data.username}
                </Title>
                <StatusWrapper>
                    <Status
                        online={isOnline}
                    />
                    <StatusName>
                        {isOnline ? 'Disponível' : 'Ocupado'}
                    </StatusName>
                </StatusWrapper>
            </UserInfoWrapper>
        </Container>
    );
}
