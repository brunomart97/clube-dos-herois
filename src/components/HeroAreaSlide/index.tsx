import React from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

import { HeroAreaCard } from '../HeroAreaCard';

export function HeroAreaSlide({ navigateToBadge }: navigateToBadgeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Área do Herói</Text>
      <ScrollView
        style={styles.subcontainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 20 }}
      >
        <HeroAreaCard
          color={theme.colors.lightGray}
          text="Carteirinha do Clube"
          icon={1}
          navigateToBadge={navigateToBadge}
          />
        <HeroAreaCard
          color={theme.colors.lightGray}
          text="Fazer Doação"
          icon={2}
          navigateToBadge={navigateToBadge}
          />
        <HeroAreaCard
          color={theme.colors.lightGray}
          text="Criar Campanha"
          icon={3}
          navigateToBadge={navigateToBadge}
        />
      </ScrollView>
    </View>
  );
}