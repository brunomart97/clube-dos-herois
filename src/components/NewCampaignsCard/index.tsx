import React from 'react';
import {
  View,
  Text,
  Pressable,
  Image
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

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
          <Text style={styles.name}>Bruno Martins</Text>
          <Text style={styles.city}>São Paulo, SP</Text>
          <Text style={styles.date}>
            <AntDesign
              name="calendar"
              size={12}
              color="white"
            />  10 Dez</Text>
        </View>
      </View>
    </Pressable>
  );
}