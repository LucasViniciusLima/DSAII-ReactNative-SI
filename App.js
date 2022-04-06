import React from 'react';
import { Center, NativeBaseProvider } from 'native-base';
import Campos from './src/components/campos';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const config = {
    dependencies: {
      "linear-gradient": LinearGradient
    }
  };

  return (
    <NativeBaseProvider config={config}>
      <Center flex={1}>
        <Campos />
      </Center>
    </NativeBaseProvider>

  );
}

