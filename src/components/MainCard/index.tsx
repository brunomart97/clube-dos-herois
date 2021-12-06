import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { theme } from '../../global/styles/theme';
import { FontAwesome } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons';

import { styles } from './styles';

export function MainCard({
  color,
  text,
  icon,
  navigateToBadge
}: MainCardType) {
  return (
    <Pressable onPress={navigateToBadge}>
      <View style={[{backgroundColor: color}, styles.container]}>
        <Text style={styles.title}>{text}</Text>
        {icon === 1 &&
          <FontAwesome
            name="qrcode"
            size={80}
            position="center"
            color={theme.colors.red}
          />
        }
        {icon === 2 &&
          <Fontisto
            name="blood"
            size={80}
            position="center"
            color={theme.colors.red}
          />
        }
        {icon === 3 &&
          <Fontisto
            name="blood-drop"
            size={75}
            position="center"
            color={theme.colors.red}
          />
        }
      </View>
    </Pressable>
  );
}