import { useState } from 'react';

import styled from 'styled-components/native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Feather } from '@expo/vector-icons';

import {
    CategorySelect,
    GuildIcon,
    Header,
} from '../../components';

import { theme } from '../../global/styles';

const Container = styled.View`
    flex: 1;
`;

const SectionLabel = styled.Text`
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


const SelectServerWrapper = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`

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

const DateTimePlaceHolder = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`

    flex: 1;
    width: 156px;
    height: 48px;
    background-color: ${theme.colors.secondary50};
    border-radius: 8px;
    justify-content: center;
    padding-left: 16px;
    margin-top: 12px;
`;

const DateTimePlaceHolderLabel = styled.Text`
    font-size: 18px;
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.highlight};
`;

const DateTimeWrapper = styled.View`
    width: 40%;
`;

const DateTimeContent = styled.View`
    flex-direction: row;
    align-items: center;
`;

const DateTimeLabel = styled.Text`
    font-size: 18px;
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
`;

export function AppointmentCreate() {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [dayMonth, setdayMonth] = useState('dd/mm');
    const [hourMinute, sethourMinute] = useState('hh:mm');

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleConfirmDateMonth = (date: Date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        /* const year = date.getFullYear(); */
        setdayMonth(`${day}/${month}`);
        hideDatePicker();
    };

    const handleConfirmHourMinute = (date: Date) => {
        const hour = date.getHours();
        const minute = date.getMinutes() === 0 ? '00' : date.getMinutes();
        sethourMinute(`${hour}:${minute}`);
        hideTimePicker();
    };

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
            <SectionLabel>
                Categoria
            </SectionLabel>
            <CategorySelect
                hasCheckBox
                categorySelected={category}
                setCategory={handleCategorySelect}
            />
            <Form>
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
                <Fields>
                    <DateTimeWrapper>
                        <DateTimeLabel>
                            Dia e mês
                        </DateTimeLabel>
                        <DateTimeContent>
                            <DateTimePlaceHolder
                                onPress={showDatePicker}
                            >
                                <DateTimePlaceHolderLabel>
                                    {dayMonth}
                                </DateTimePlaceHolderLabel>
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleConfirmDateMonth}
                                    onCancel={hideDatePicker}
                                    locale="pt_BR"
                                />
                            </DateTimePlaceHolder>
                        </DateTimeContent>
                    </DateTimeWrapper>
                    <DateTimeWrapper>
                        <DateTimeLabel>
                            Hora e minuto
                        </DateTimeLabel>
                        <DateTimeContent>
                            <DateTimePlaceHolder
                                onPress={showTimePicker}
                            >
                                <DateTimePlaceHolderLabel>
                                    {hourMinute}
                                </DateTimePlaceHolderLabel>
                                <DateTimePickerModal
                                    isVisible={isTimePickerVisible}
                                    mode="time"
                                    onConfirm={handleConfirmHourMinute}
                                    onCancel={hideTimePicker}
                                    locale="pt_BR"
                                />
                            </DateTimePlaceHolder>
                        </DateTimeContent>
                    </DateTimeWrapper>
                </Fields>
            </Form>
        </Container>
    );
}
