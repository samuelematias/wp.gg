import { useState } from 'react';

import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';

import {
    CategorySelect,
    GuildIcon,
    Header,
    SmallInput,
} from '../../components';

import { theme } from '../../global/styles';

const Container = styled.View`
    flex: 1;
`;

const Label = styled.Text`
    font-size: 18px;
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
    margin-left: 24px;
    margin-bottom: 18px;
`;

const Form = styled.View`
    padding-horizontal: 24px;
    margin-top: 32px;
`;

const Touchable = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`

`;

const SelectServerWrapper = styled.View`
    flex-direction: row;
    width: 100%;
    height: 68px;
    border-width: 1px;
    border-color: ${theme.colors.secondary50};
    border-radius: 8px;
    align-items: center;
    padding-right: 25px;
    overflow: hidden;
`;

const SelectServerContent = styled.View`
    flex: 1;
    align-items: center;
`;

const SelectServerLabel = styled.Text`
    font-size: 18px;
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
`;

const ImagePlaceHolder = styled.View`
    width: 64px;
    height: 68px;
    background-color: ${theme.colors.secondary50};
    border-width: 1px;
    border-radius: 8px;
`;

const StyledFeather = styled(Feather).attrs({
    name: 'chevron-right',
})`
    color: ${theme.colors.heading};
    font-size: 18px;
`;

const Fields = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
`;

const DayMonthWrapper = styled.View`
    width: 40%;
`;

const DayMonthContent = styled.View`
    flex-direction: row;
    align-items: center;
`;

const DayMonthLabel = styled.Text`
    font-size: 18px;
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
`;

const BarDivider = styled.Text`
    margin-right: 4px;
    font-size: 15px;
    font-family: ${theme.fonts.text500};
    color: ${theme.colors.heading};
`;

export function AppointmentCreate() {
    const hasGuild = false;
    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    const [category, setCategory] = useState('');
    return (
        <Container>
            <Header
                title="Agendar partida"
            />
            <Label>
                Categoria
            </Label>
            <CategorySelect
                hasCheckBox
                categorySelected={category}
                setCategory={handleCategorySelect}
            />
            <Form>
                <Touchable>
                    <SelectServerWrapper>
                        {hasGuild ? (
                            <GuildIcon
                                urlImage='https://github.com/samuelematias.png'
                            />
                        ) : (
                            <ImagePlaceHolder />
                        )}
                        <SelectServerContent>
                            <SelectServerLabel>
                                Selecione um servidor
                            </SelectServerLabel>
                        </SelectServerContent>
                        <StyledFeather />
                    </SelectServerWrapper>
                </Touchable>
                <Fields>
                    <DayMonthWrapper>
                        <DayMonthLabel>
                            Dia e mês
                        </DayMonthLabel>
                        <DayMonthContent>
                            <SmallInput
                                maxLength={2}
                            />
                            <BarDivider>
                                /
                            </BarDivider>
                            <SmallInput
                                maxLength={2}
                            />
                        </DayMonthContent>
                    </DayMonthWrapper>
                </Fields>
            </Form>
        </Container>
    );
}
