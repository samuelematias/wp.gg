import 'react-native';
import React from 'react';

import {
    render,
} from '../../../../jest/helper';

import { Avatar } from '../../../../src/components';

const urlImage = 'https://facebook.github.io/react-native/docs/assets/favicon.png';

const avatarTestId = {
    image: 'avatar-image',
    imagePlaceholder: 'avatar-image-placeholder',
};

const renderComponent = <Avatar urlImage={urlImage} />;

describe('Avatar', () => {
    it('should render correctly and match the snapshot', () => {
        const { toJSON } = render(renderComponent);
        expect(toJSON()).toMatchSnapshot();
    });

    it('should render correctly, the image, when have valid url image', () => {
        const { getByTestId } = render(renderComponent);

        expect(getByTestId(avatarTestId.image)).toBeTruthy();
    });

    it('should render correctly, the image placeholder, when have a invalid url image as empty', () => {
        const renderComponentWithInvalidUrlImageAsEmpty = <Avatar urlImage={''} />;
        const { getByTestId } = render(renderComponentWithInvalidUrlImageAsEmpty);

        expect(getByTestId(avatarTestId.imagePlaceholder)).toBeTruthy();
    });

    it('should render correctly, the image placeholder, when have a invalid url image as null', () => {
        const renderComponentWithInvalidUrlImageAsNull = <Avatar urlImage={null} />;
        const { getByTestId } = render(renderComponentWithInvalidUrlImageAsNull);

        expect(getByTestId(avatarTestId.imagePlaceholder)).toBeTruthy();
    });
})
