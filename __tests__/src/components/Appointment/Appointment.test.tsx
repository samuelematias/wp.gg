import 'react-native';
import React from 'react';

import {
    render,
    fireEvent,
} from '../../../../jest/helper';

import { Appointment } from '../../../../src/components';

import { theme } from '../../../../src/global/styles';

const onPressMock = jest.fn();

const appointment = {
    id: '1',
    guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
    },
    category: '1',
    date: '22/06 às 20:40h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
};

const appointmentTestId = {
    touchable: 'appointment',
    playerIcon: 'appointment-player-icon',
};

const guildIconTestId = {
    guildImage: 'guild-icon-image',
    guildImagePlaceholder: 'guild-icon-image-placeholder',
};

const renderAppointment =
    <Appointment
        data={appointment}
        onPress={onPressMock}
    />;

describe('Appointment', () => {

    it('should render correctly and match the snapshot', () => {
        const { toJSON } = render(renderAppointment);

        expect(toJSON()).toMatchSnapshot();
    });

    it('should render correctly', () => {
        const { getByText } = render(renderAppointment);

        expect(getByText(appointment.guild.name)).toBeTruthy();
    });

    it('should call onPress when pressed', () => {
        const { getByTestId } = render(renderAppointment);

        fireEvent.press(getByTestId(appointmentTestId.touchable));

        expect(onPressMock).toHaveBeenCalled();
    });

    it('should render correctly the Anfitrião, when owner', () => {
        const { getByText } = render(renderAppointment);

        expect(getByText('Anfitrião')).toBeTruthy();
    });

    it('should render correctly the playerTitle color, theme.colors.primary, when owner', () => {
        const { getByText } = render(renderAppointment);

        const playerTitle = getByText('Anfitrião');

        expect(playerTitle.props.style[0].color).toBe(theme.colors.primary);

    });

    it('should render correctly the Visitante, when not owner', () => {
        const appointmentNotOwner = {
            ...appointment,
            guild: {
                ...appointment.guild,
                owner: false,
            },
        };

        const renderAppointmentNotOwner =
            <Appointment
                data={appointmentNotOwner}
                onPress={onPressMock}
            />;

        const { queryByText } = render(renderAppointmentNotOwner);

        expect(queryByText('Visitante')).toBeTruthy();
    });

    it('should render correctly the playerTitle color, theme.colors.on, when not owner', () => {
        const appointmentNotOwner = {
            ...appointment,
            guild: {
                ...appointment.guild,
                owner: false,
            },
        };

        const renderAppointmentNotOwner =
            <Appointment
                data={appointmentNotOwner}
                onPress={onPressMock}
            />;

        const { getByText } = render(renderAppointmentNotOwner);

        const playerTitle = getByText('Visitante');

        expect(playerTitle.props.style[0].color).toBe(theme.colors.on);
    });

    it('should render correctly the icon color, theme.colors.on, when not owner', () => {
        const appointmentHasIcon = {
            ...appointment,
            guild: {
                ...appointment.guild,
                owner: false,
            },
        };

        const renderAppointmentNotOwner =
            <Appointment
                data={appointmentHasIcon}
                onPress={onPressMock}
            />;

        const { getByTestId } = render(renderAppointmentNotOwner);

        const playerIcon = getByTestId(appointmentTestId.playerIcon);

        expect(playerIcon.props.fill).toBe(theme.colors.on);
    });

    it('should render correctly the icon color, theme.colors.primary, when owner', () => {
        const { getByTestId } = render(renderAppointment);

        const playerIcon = getByTestId(appointmentTestId.playerIcon);

        expect(playerIcon.props.fill).toBe(theme.colors.primary);
    });

    it('should render correctly when has GuildIcon image', () => {
        const appointmentHasIcon = {
            ...appointment,
            guild: {
                ...appointment.guild,
                icon: 'image.png',
                owner: false,
            },
        };

        const renderAppointmentHasGuildIcon =
            <Appointment
                data={appointmentHasIcon}
                onPress={onPressMock}
            />;

        const { getByTestId } = render(renderAppointmentHasGuildIcon);

        expect(getByTestId(guildIconTestId.guildImage)).toBeTruthy();
    });

    it('should render correctly when has no GuildIcon image', () => {
        const { queryByTestId } = render(renderAppointment);

        expect(queryByTestId(guildIconTestId.guildImage)).toBeFalsy();
    });

    it('should render correctly the placeholder, when has no image', () => {
        const { queryByTestId } = render(renderAppointment);

        expect(queryByTestId(guildIconTestId.guildImagePlaceholder)).toBeTruthy();
    });

    it('should render correctly the category', () => {
        const { getByText } = render(renderAppointment);

        expect(getByText('Ranqueada')).toBeTruthy();
    });

    // w8 for this feature implementation.
    /* it('should be able to render with selected', () => {
*     const { getByText, getByTestId } = render(<Appointment data={appointment} />);

*     fireEvent(getByTestId(appointmentTestId.touchable), 'onLongPress');

*     expect(getByText('Desmarcar')).toBeTruthy();
* }); */
})
