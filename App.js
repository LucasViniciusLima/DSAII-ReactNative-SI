import React, { useState, useEffect } from 'react';
import { NativeBaseProvider } from 'native-base';
import { StaggerButton } from './src/components/stagger-button';
import { CardModel } from './src/components/card-model';
import { FlatList } from 'react-native';


export default function App() {

  const [card, setCard] = useState([{
    id: 1,
    urlImage: "https://streamingsbrasil.com/wp-content/uploads/2021/03/Demon-Slayer-Kimetsu-no-Yaiba-1130x580.jpg",
    title: "Meu Título",
    bodyText: "Corpo do texto teste text text",
    date: "20.20.2022"
  }]);

  const saveNewCard = (obj) => {
    setCard([...card, {
      id: card.length,
      urlImage: obj.urlImage,
      title: obj.title,
      bodyText: obj.bodyText,
      date: obj.date
    }])
  }

  return (
    <NativeBaseProvider>
      <FlatList numColumns={2} data={card} renderItem={({ item }) => <CardModel title={item.title} urlImage={item.urlImage} bodyText={item.bodyText} date={item.date} />} keyExtractor={card => card.id} />
      <StaggerButton onSaveObj={(obj) => { saveNewCard(obj) }} />
    </NativeBaseProvider>
  );
}

//