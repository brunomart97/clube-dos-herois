import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './styles';

export function MiniProfile() {
  const urlImage: string = 'https://github.com/brunomart97.png';

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.left}>
          <View style={styles.nameContainer}>
            <Text style={styles.greeting}>Olá,</Text>
            <Text style={styles.username}>Bruno</Text>
          </View>
          
          <View style={styles.levelContainer}>
            <Text style={styles.levelText}>Herói nível:</Text>
            <Text style={styles.levelNumber}>15</Text>
            <FontAwesome
              style={styles.levelIcon}
              name="star"
              size={15}
              position="center"
              color="#FFFFFF"
            />
          </View>
        </View>

        <View style={styles.right}>
          <Image
            source={{ uri: urlImage }}
            style={styles.image}
          />
        </View>
      </View>

      <View style={styles.bottom} />
    </View>
  );
}