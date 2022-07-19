import React, { useEffect, useRef } from 'react';
import { FlatList } from "react-native";

import {Gnome} from '../../data';

import { 
  Container,
  TitleContent,
  TitleText,
  DescContent,
  DescText
 } from './styles';

interface Props{
  index:number;
  data: Gnome[];
}
export function HeaderText({data, index}:Props) {
  const titleListRef = useRef<FlatList>(null);
  const descListRef = useRef<FlatList>(null);

  useEffect(() => {
    titleListRef.current?.scrollToIndex({ index, animated: true });
    setTimeout(() => {
      descListRef.current?.scrollToIndex({ index, animated: true });
    }, 150);
  }, [index]);

  return (
    <Container>
      <TitleContent
        delay={1000}
        from={{ paddingTop: 80 }}
        animate={{ paddingTop: 0 }}
        transition={{ type: "timing", duration: 600 }}
      >
        <FlatList
          ref={titleListRef}
          data={data}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <TitleText>{item.name}</TitleText>}
          scrollEnabled={false}
        />
      </TitleContent>
      <DescContent
        delay={1200}
        from={{ paddingTop: 22 }}
        animate={{ paddingTop: 0 }}
        transition={{ type: "timing", duration: 600 }}
      >
        <FlatList
          ref={descListRef}
          data={data}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <DescText>{item.description}</DescText>
          )}
          scrollEnabled={false}
        />
      </DescContent>
    </Container>
  );
}