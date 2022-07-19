import React from 'react';
import {Feather} from '@expo/vector-icons';

import { Container, Profile } from './styles';

export function Header() {
  return (
    <Container
      delay={1000}
      from={{ top: -50 }}
      animate={{ top: 25 }}
      transition={{ type: "timing", duration: 500 }}
    >
      <Feather name='chevron-left' size={30} color="white"/>
      <Profile source={{uri:"https://avatars.githubusercontent.com/u/62598805?v=4"}}/>
    </Container>
  );
}