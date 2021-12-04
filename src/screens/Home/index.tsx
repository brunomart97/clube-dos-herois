import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import { StatusBarFixed } from '../../components/StatusBarFixed';
import { MiniProfile } from '../../components/MiniProfile';

export function Home() {
  return (
    <View style={styles.screen}>
      <StatusBarFixed />
      <MiniProfile />
    </View>
  );
}