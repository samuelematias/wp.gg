import { FlatList } from 'react-native';

import styled from 'styled-components/native';

import { Category } from '../Category';

import { categories, CategoryProps } from '../../utils';

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheckBox?: boolean;
};

const CategoryList = styled(FlatList as new () => FlatList<CategoryProps>).attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
})`
    min-height: 120px;
    max-height: 120px;
    padding-left: 24px;
`
const Divider = styled.View`
    width: 8px;
`
export function CategorySelect({
    categorySelected,
    setCategory,
    hasCheckBox = false,
}: Props) {

    return (
        <CategoryList
            data={categories}
            keyExtractor={(item: CategoryProps) => item.id}
            renderItem={({ item }: { item: CategoryProps }) => (
                <Category
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                    checked={item.id === categorySelected}
                    onPress={() => setCategory(item.id)}
                    hasCheckBox={hasCheckBox}
                />
            )}
            ItemSeparatorComponent={() => <Divider />}
            contentContainerStyle={{ paddingRight: 40 }}
        />
    );
}
