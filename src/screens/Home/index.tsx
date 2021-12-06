import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import { MiniProfile } from '../../components/MiniProfile';
import { MainSlide } from '../../components/MainSlide';

export function Home() {
  const navigation = useNavigation<NavigationProps>();

  function navigateToBadge() {
    navigation.navigate('Badge');
  }

  return (
    <ScrollView style={styles.container}>
      <MiniProfile />
      <MainSlide
        navigateToBadge={navigateToBadge}
      />
    </ScrollView>
  );
}