import React from 'react';
import {
  View,
  Text,
  Pressable,
  Image
} from 'react-native';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

export function NewCampaignsCard() {
  const urlImage: string = 'https://github.com/brunomart97.png';

  return (
    <Pressable>
      <View style={styles.container}>
        <View style={styles.left}>
          <Image
            source={{ uri: urlImage }}
            style={styles.image}
          />
        </View>

        <View style={styles.right}>
          <Text style={styles.name}>Pedro Ferreira</Text>
        </View>
      </View>
    </Pressable>
  );
}