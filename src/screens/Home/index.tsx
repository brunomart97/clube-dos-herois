import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import { MiniProfile } from '../../components/MiniProfile';
import { HeroAreaSlide } from '../../components/HeroAreaSlide';
import { NewCampaignsSlide } from '../../components/NewCampaignsSlide';

export function Home() {
  const navigation = useNavigation<NavigationProps>();

  function navigateToBadge() {
    navigation.navigate('Badge');
  }

  return (
    <ScrollView style={styles.container}>
      <MiniProfile />
      <HeroAreaSlide
        navigateToBadge={navigateToBadge}
      />
      <NewCampaignsSlide />
    </ScrollView>
  );
}