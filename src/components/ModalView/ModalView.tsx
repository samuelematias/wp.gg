import {
    ReactNode,
    ElementType,
} from 'react'
import { ModalProps } from 'react-native';

import styled from 'styled-components/native';

import { theme } from '../../global/styles';

type Props = ModalProps & {
    children: ReactNode;
    closeModal: () => void;
}

const Modal = styled.Modal.attrs({
    transparent: true,
    animationType: 'slide',
    statusBarTranslucent: true,
})`
`;

const Touchable = styled.TouchableWithoutFeedback``;

const Overlay = styled.View`
    flex: 1;
    background-color: ${theme.colors.overlay};
`;

const Content = styled.View`
    flex: 1;
    margin-top: 100px;
    background-color: ${theme.colors.secondary100};
    border-radius: 20px;
`;

const Bar = styled.View`
    width: 39px;
    height: 2px;
    background-color: ${theme.colors.secondary30};
    border-radius: 2px;
    margin-top: 13px;
    margin-bottom: 16px;
    align-self: center;
`;

export function ModalView({
    children,
    closeModal,
    ...rest
}: Props) {
    return (
        <Modal<ElementType>
            {...rest}
        >
            <Touchable
                onPress={closeModal}
            >
                <Overlay>
                    <Content>
                        <Bar />
                        {children}
                    </Content>
                </Overlay>
            </Touchable >

        </Modal >
    );
}
