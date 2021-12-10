import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { theme } from '../../global/styles/theme';
import { FontAwesome } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons';

import { styles } from './styles';

export function HeroAreaCard({
  color,
  text,
  icon,
  navigateToBadge
}: MainCardType) {
  return (
    <Pressable onPress={navigateToBadge}>
      <View style={[{backgroundColor: color}, styles.container]}>
        {icon === 1 &&
          <FontAwesome
            name="qrcode"
            size={75}
            position="center"
            color={theme.colors.red}
          />
        }
        {icon === 2 &&
          <Fontisto
            name="blood"
            size={75}
            position="center"
            color={theme.colors.red}
          />
        }
        {icon === 3 &&
          <Fontisto
            name="blood-drop"
            size={70}
            position="center"
            color={theme.colors.red}
          />
        }
        <Text style={styles.title}>{text}</Text>
      </View>
    </Pressable>
  );
}