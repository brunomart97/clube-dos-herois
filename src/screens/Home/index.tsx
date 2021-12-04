import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import { StatusBarFixed } from '../../components/StatusBarFixed';
import { MiniProfile } from '../../components/MiniProfile';
import { MainSlide } from '../../components/MainSlide';

export function Home() {
  return (
    <View style={styles.screen}>
      <StatusBarFixed />
      <MiniProfile />
      <MainSlide />
    </View>
  );
}