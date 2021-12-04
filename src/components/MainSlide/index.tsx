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
          icon="qrcode"
          />
        <MainCard
          color={theme.colors.lightGray}
          text="Fazer Doação"
          icon="blood"
          />
        <MainCard
          color={theme.colors.lightGray}
          text="Solicitar Doação"
          icon="blood-drop"
          />
      </ScrollView>
    </View>
  );
}