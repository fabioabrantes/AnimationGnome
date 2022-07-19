import React, { useEffect, useState } from 'react';

import { GestureHandlerRootView, GestureDetector, Directions, Gesture } from "react-native-gesture-handler";
import { useDynamicAnimation } from "moti";
import { useSharedValue, useAnimatedStyle } from "react-native-reanimated";

import { StatusBar } from "react-native";

import {Header} from '../../components/Header';
import {HeaderText} from '../../components/HeaderText';
import {Star} from '../../components/Star';
import {Avatar} from '../../components/Avatar';
import {BottomBar} from '../../components/BottomBar';
import {BottomContent} from '../../components/BottomContent';


import data, {Gnome} from "../../data";

import { 
  Container,
  Transition,
  Content
} from './styles';

export function Main(){
  const [gnome, setGnome] = useState<Gnome>(data[0])
  const [index, setIndex] = useState(0);
  const [firstSlide, setFirstSlide] = useState(false);
  const backgroundColor = useSharedValue(gnome.color);

  const transition = useDynamicAnimation();
  const animationContainer = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));

   useEffect(() => {
    if (firstSlide) {
      transition.animateTo({ scale: [3, 0] });
      setTimeout(() => (backgroundColor.value = gnome.color), 500);
    }
  }, [gnome, firstSlide]);

  function handleSlide() {
    console.log("passou aqui");
    if (!firstSlide) setFirstSlide(true);
    setIndex((prev) => {
      if (prev < data.length - 1) {
        setGnome(data[prev + 1]);
        return (prev + 1);
      }
      setGnome(data[0]);
      return 0;
    });
  }

const flingGestureLeft = Gesture.Fling().direction(Directions.LEFT).onEnd(handleSlide);

  return (
    <Container style={animationContainer}>
      <StatusBar barStyle="light-content" />
      <GestureHandlerRootView style={{flex: 1}}>
        <GestureDetector gesture={flingGestureLeft}>
          <Content>
            <Transition 
              from={{ scale: 0 }}
              state={transition}
              transition={{ type: "timing", duration: 500 }}
              tintColor={gnome.color}
            />
            <Header  />
            <HeaderText  data={data} index={index}/>
            <Star stars={gnome.stars}/>
            <Avatar data={data} index={index} />
            <BottomContent currentWins={gnome.wins} />
          </Content>
        </GestureDetector>
      </GestureHandlerRootView>
      <BottomBar  />
    </Container>
  );
}