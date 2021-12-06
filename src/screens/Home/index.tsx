import React, { useCallback } from 'react';
import { View, ScrollView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import { StatusBarFixed } from '../../components/StatusBarFixed';
import { MiniProfile } from '../../components/MiniProfile';
import { MainSlide } from '../../components/MainSlide';

export function Home() {
  const navigation = useNavigation<NavigationProps>()

  function navigateToBadge() {
    navigation.navigate('Badge');
  }

  return (
    <View style={styles.container}>
      <StatusBarFixed />
      <ScrollView style={styles.screenSubcontainer}>
        <MiniProfile />
        <MainSlide
          navigateToBadge={navigateToBadge}
        />
      </ScrollView>
    </View>
  );
}