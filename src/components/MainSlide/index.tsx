import React from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

import { MainCard } from '../MainCard';

export function MainSlide() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clube dos Heróis</Text>
      <ScrollView
        style={styles.subcontainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 20 }}
      >
        <MainCard
          color={theme.colors.lightGray}
          text="Carteirinha do Clube"
          icon={1}
        />
        <MainCard
          color={theme.colors.lightGray}
          text="Fazer Doação"
          icon={2}
        />
        <MainCard
          color={theme.colors.lightGray}
          text="Procurar Doadores"
          icon={3}
        />
      </ScrollView>
    </View>
  );
}