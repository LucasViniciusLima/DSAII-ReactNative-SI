import { Heading, Input, Box, Button } from "native-base";
import React from "react";
import { Text } from "react-native";

export default function Campos() {
    const [altura, setAltura] = React.useState("0");
    const [peso, setPeso] = React.useState("0");
    const [imc, setImc] = React.useState(0);

    const calcular = () => {
        setImc(+peso / (+altura * +altura));
    }

    return (
        <Box bg={{
            linearGradient: {
                colors: ["violet.900", "violet.700"],
                start: [0, 0],
                end: [1, 0]
            }
        }} p="9" rounded="xl" _text={{
            fontSize: "md",
            fontWeight: "medium",
            color: "warmGray.50"
        }}>
            <Heading color={'warmGray.50'}>Altura</Heading>
            <Input w="100%" marginY={3} placeholder="Altura em metros" _light={{
                placeholderTextColor: "blueGray.600",
                color: "warmGray.600",
                backgroundColor: "#FFF"
            }} value={altura}
                onChangeText={text => setAltura(text)}
                minW='250'
            />
            <Heading color={'warmGray.50'}>Peso</Heading>
            <Input w="100%" marginY={3} placeholder="Peso em quilos" _light={{
                placeholderTextColor: "blueGray.600",
                color: "warmGray.600",
                backgroundColor: "#FFF"
            }} value={peso}
                onChangeText={text => setPeso(text)}
                minW='250'
            />
            <Button marginY={2} onPress={() => { calcular() }}>Calcular</Button>
            <Text style={{color: '#fff'}}>Seu IMC é: {imc}</Text>
        </Box>
    );
}
