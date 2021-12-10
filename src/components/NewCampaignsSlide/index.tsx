import React from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

import { NewCampaignsCard } from '../NewCampaignsCard';

export function NewCampaignsSlide() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Últimas Campanhas</Text>
      <ScrollView
        style={styles.subcontainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 20 }}
      >
        <NewCampaignsCard />
      </ScrollView>
    </View>
  );
}