import React, { useState } from "react";
import { Button, Center, FormControl, Input, Modal } from "native-base";


export const RegisterModal = (props) => {
    const [showModal, setShowModal] = useState(true);

    return <Center>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>Criar novo card</Modal.Header>
                <Modal.Body>
                    <FormControl>
                        <FormControl.Label>Titulo</FormControl.Label>
                        <Input />
                    </FormControl>
                    <FormControl mt="3">
                        <FormControl.Label>Texto</FormControl.Label>
                        <Input />
                    </FormControl>
                    <FormControl mt="3">
                        <FormControl.Label>Url da Imagem</FormControl.Label>
                        <Input />
                    </FormControl>
                </Modal.Body>
                <Modal.Footer>
                    <Button.Group space={2}>
                        <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                            setShowModal(false);
                        }}>
                            Cancelar
                        </Button>
                        <Button onPress={() => {
                            setShowModal(false);
                        }}>
                            Salvar
                        </Button>
                    </Button.Group>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    </Center>;
};