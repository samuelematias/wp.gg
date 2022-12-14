import { useState } from 'react';

import styled from 'styled-components/native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';

import { COLLECTION_APPOINTMENTS } from '../../configs';

import {
    Button,
    CategorySelect,
    GuildIcon,
    Header,
    TextArea,
    ModalView,
    GuildProps,
} from '../../components';

import { Guilds } from '../Guilds';

import { theme } from '../../global/styles';

const Container = styled.View`
    flex: 1;
`;

const Scroll = styled(KeyboardAwareScrollView).attrs({
})`
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
    background-color: ${theme.colors.secondary100};
    border-width: 1px;
    border-color: ${theme.colors.primary};
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
    height: 66px;
    background-color: ${theme.colors.secondary100};
    border-radius: 8px;
    border-width: 1px;
    border-color: ${theme.colors.primary};
`;

const ChevronRightIcon = styled(Feather).attrs({
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
    background-color: ${theme.colors.secondary100};
    border-radius: 8px;
    justify-content: center;
    padding-left: 16px;
    margin-top: 12px;
    border-width: 1px;
    border-color: ${theme.colors.primary};
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

const DescriptionLabel = styled.Text`
    font-size: 18px;
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
`;

const MaxCharLabel = styled.Text`
    font-size: 13px;
    font-family: ${theme.fonts.text400};
    color: ${theme.colors.highlight};
`;

const Footer = styled.View`
    margin-top: 20px;
    margin-bottom: 56px;
`;

export function AppointmentCreate() {
    const navigation = useNavigation();
    const [category, setCategory] = useState('');
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);
    const [openGuildsModal, setOpenGuildsModal] = useState(false);
    const hasGuild = guild.name;

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [dayMonth, setdayMonth] = useState('dd/mm');
    const [hourMinute, sethourMinute] = useState('hh:mm');
    const [description, setDescription] = useState('');

    const isButtonDisabled = !category
        || !hasGuild
        || !containsNumbers(dayMonth)
        || !containsNumbers(hourMinute)
        || !description;

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
        const convertedDay = day <= 9 ? '0' + day : day;
        const month = date.getMonth() + 1;
        const convertedMonth = month <= 9 ? '0' + month : month;
        setdayMonth(`${convertedDay}/${convertedMonth}`);
        hideDatePicker();
    };

    const handleConfirmHourMinute = (date: Date) => {
        const hour = date.getHours();
        const convertedHour = hour <= 9 ? '0' + hour : hour;
        const minutes = date.getMinutes();
        const convertedMinutes = minutes <= 9 ? '0' + minutes : minutes;
        sethourMinute(`${convertedHour}:${convertedMinutes}`);
        hideTimePicker();
    };

    function containsNumbers(str: string) {
        return Boolean(str.match(/\d/));
    }

    function handleCategorySelect(categoryId: string) {
        setCategory(categoryId);
    }

    function handleOpenGuilds() {
        setOpenGuildsModal(true);
    }

    function handleCloseGuilds() {
        setOpenGuildsModal(false);
    }

    function handleGuildSelect(guildSelect: GuildProps) {
        setGuild(guildSelect);
        setOpenGuildsModal(false);
    }

    async function handleSave() {
        const newAppointment = {
            id: uuid.v4(),
            guild,
            category,
            date: `${dayMonth} ??s ${hourMinute}h`,
            description
        };

        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const appointments = storage ? JSON.parse(storage) : [];

        await AsyncStorage.setItem(
            COLLECTION_APPOINTMENTS,
            JSON.stringify([...appointments, newAppointment])
        );

        navigation.navigate('home');
    }

    return (
        <Container>

            <Scroll>
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
                    <SelectServerWrapper
                        onPress={handleOpenGuilds}
                    >
                        {
                            hasGuild
                                ? (
                                    <GuildIcon
                                        guildId={guild.id}
                                        iconId={guild.icon}
                                    />
                                )
                                : (
                                    <ImagePlaceHolder />
                                )
                        }
                        <SelectServerContent>
                            <SelectServerLabel>
                                {
                                    hasGuild
                                        ? guild.name
                                        : 'Selecione um servidor'
                                }
                            </SelectServerLabel>
                        </SelectServerContent>
                        <ChevronRightIcon />
                    </SelectServerWrapper>
                    <Fields>
                        <DateTimeWrapper>
                            <DateTimeLabel>
                                Dia e m??s
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
                                Hor??rio
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
                    <Fields
                        style={{
                            marginBottom: 12
                        }}
                    >
                        <DescriptionLabel>
                            Descri????o
                        </DescriptionLabel>
                        <MaxCharLabel>
                            Max 100 caracteres
                        </MaxCharLabel>
                    </Fields>
                    <TextArea
                        multiline
                        maxLength={100}
                        numberOfLines={5}
                        autoCorrect={false}
                        onChangeText={setDescription}
                    />
                    <Footer>
                        <Button
                            label="Agendar"
                            onPress={handleSave}
                            disabled={isButtonDisabled}
                        />
                    </Footer>
                </Form>
            </Scroll>
            <ModalView
                visible={openGuildsModal}
                closeModal={handleCloseGuilds}
            >
                <Guilds
                    handleGuildSelect={handleGuildSelect}
                />
            </ModalView>
        </Container>
    );
}
