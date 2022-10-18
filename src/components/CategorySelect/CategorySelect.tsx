import styled from 'styled-components/native';

import { Category } from '../Category';

import { categories } from '../../utils';

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheckBox?: boolean;
};

const Scroll = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false
})`
    min-height: 120px;
    max-height: 120px;
    padding-left: 24px;
`;

export function CategorySelect({
    categorySelected,
    setCategory,
    hasCheckBox = false,
}: Props) {

    return (
        <Scroll
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {categories.map(category => (
                <Category
                    key={category.id}
                    title={category.title}
                    icon={category.icon}
                    checked={category.id === categorySelected}
                    activeOpacity={0.7}
                    onPress={() => setCategory(category.id)}
                    hasCheckBox={hasCheckBox}
                />
            ))}
        </Scroll>
    );
}
