import styled from 'styled-components/native';

type Props = {
    urlImage: string;
};

const Image = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 8px;
    margin-right: 20px;
`;

export function GuildIcon({ urlImage }: Props) {
    return (
        <Image
            source={{ uri: urlImage }}
            resizeMethod="resize"
        />
    );
}
