import React from 'react';
import { ScrollView, Text } from 'react-native';

import { styles } from './styles';

export function Profile() {

  return (
    <ScrollView style={styles.container}>
      <Text>Profile</Text>
    </ScrollView>
  );
}