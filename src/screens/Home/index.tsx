import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

import { StatusBarFixed } from '../../components/StatusBarFixed';

export function Home() {
  return (
    <View>
      <StatusBarFixed />
      <Text>Home</Text>
    </View>
  );
}