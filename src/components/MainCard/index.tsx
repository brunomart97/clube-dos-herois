import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import { theme } from '../../global/styles/theme';
import { FontAwesome } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons';

import { styles } from './styles';

export function MainCard({
  color,
  text,
  icon
}: MainCardType) {
  return (
    <View style={[{backgroundColor: color}, styles.container]}>
      <Text style={styles.title}>{text}</Text>
      {icon === 'qrcode' && (
        <FontAwesome
          style={styles.icon}
          name="qrcode"
          size={80}
          position="center"
          color={theme.colors.red}
        />
      )}
      {icon === 'blood' && (
        <Fontisto
          style={styles.icon}
          name="blood"
          size={80}
          position="center"
          color={theme.colors.red}
        />
      )}
      {icon === 'blood-drop' && (
        <Fontisto
          style={styles.icon}
          name="blood-drop"
          size={75}
          position="center"
          color={theme.colors.red}
        />
      )}
    </View>
  );
}