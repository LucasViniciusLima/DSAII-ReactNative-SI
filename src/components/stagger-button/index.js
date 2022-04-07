import React, { useState } from "react";
import { Box, useDisclose, Center, HStack, Icon, IconButton, Stagger, Flex } from "native-base";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RegisterModal } from '../register-modal';


export const StaggerButton = (props) => {
    const { isOpen, onToggle } = useDisclose();
    const [showMdl, setShowMdl] = useState(false);

    const renderModal = () => {
        setShowMdl(!showMdl);
    }

    const save = (myObj) => {
        props.onSaveObj?.({ id: 1, title: myObj.title, bodyText: myObj.bodyText, urlImage: myObj.urlImage, date: new Date().toISOString().slice(0, 10).replace(/-/g, ".") });
    }

    return <Flex direction="row-reverse" p={4}>
        <Center>
            <Box alignItems="center" minH="10">
                <Stagger visible={isOpen} initial={{
                    opacity: 0,
                    scale: 0,
                    translateY: 34
                }} animate={{
                    translateY: 0,
                    scale: 1,
                    opacity: 1,
                    transition: {
                        type: "spring",
                        mass: 0.8,
                        stagger: {
                            offset: 30,
                            reverse: true
                        }
                    }
                }} exit={{
                    translateY: 34,
                    scale: 0.5,
                    opacity: 0,
                    transition: {
                        duration: 100,
                        stagger: {
                            offset: 30,
                            reverse: true
                        }
                    }
                }}>
                    <IconButton mb="4" variant="solid" bg="tertiary.600" colorScheme="tertiary" borderRadius="full" icon={<Icon as={MaterialCommunityIcons} size="8" name="plus" _dark={{
                        color: "warmGray.50"
                    }} color="warmGray.50" onPress={() => { onToggle(); renderModal(); }} />} />
                </Stagger>
            </Box>

            <HStack alignItems="center">
                <IconButton variant="solid" borderRadius="full" size="lg" onPress={onToggle} bg="cyan.400" icon={<Icon as={MaterialCommunityIcons} size="8" name="dots-horizontal" color="warmGray.50" _dark={{
                    color: "warmGray.50"
                }} />} />
            </HStack>
            {showMdl ? <RegisterModal onSave={(myObj) => { save(myObj) }} /> : null}
        </Center>


    </Flex>;
};