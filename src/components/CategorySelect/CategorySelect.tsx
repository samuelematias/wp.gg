import styled from 'styled-components/native';

const Scroll = styled.ScrollView`
`;

const ContentTitle = styled.Text`
  color: white;
  text-align: center;
  font-size: 40px;
  margin-bottom: 16px;
  line-height: 40px;
`;
export function CategorySelect() {
    return (
        <Scroll
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            <ContentTitle>
                Hello!
            </ContentTitle>
        </Scroll>
    );
}
