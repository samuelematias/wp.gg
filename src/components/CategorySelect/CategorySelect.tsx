import styled from 'styled-components/native';

import { Category } from '../Category';
import { categories } from '../../utils';

type CategorySelectProps = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheckBox?: boolean;
};

const Scroll = styled.ScrollView`
    min-height: 120px;
    max-height: 120px;
    padding-left: 24px;
`;

export function CategorySelect({
    categorySelected,
    setCategory,
}: CategorySelectProps) {

    return (
        <Scroll
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {categories.map(category => (
                <Category
                    key={category.id}
                    title={category.title}
                    icon={category.icon}
                    checked={category.id === categorySelected}
                    activeOpacity={0.7}
                    onPress={() => setCategory(category.id)} />
            ))}
        </Scroll>
    );
}
