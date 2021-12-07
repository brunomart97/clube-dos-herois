import React from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground
} from 'react-native';
import DashedLine from 'react-native-dashed-line';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import mapBackground from '../../assets/mapBackground.png';

export function UserBadge() {
  const urlImage: string = 'https://github.com/brunomart97.png';

  return (
    <View style={styles.container}>
      <View style={styles.subcontainerTop}>
        <ImageBackground
          source={mapBackground}
          style={styles.imageBackground}
        />

        <View style={styles.headerTop}>
          <Image
            source={{ uri: urlImage }}
            style={styles.image}
          />
          <View style={styles.headerTopRight}>
            <Text style={styles.bloodType}>B+</Text>
            <Text style={styles.bloodDonation}>3 Doações</Text>
            <Text style={styles.bloodRequest}>0 Solicitações</Text>
          </View>
        </View>

        <View style={styles.headerBottom}>
          <Text style={styles.name}>Bruno Martins</Text>
          <Text style={styles.age}>04/05/1997</Text>
          <Text style={styles.levelHero}>Herói nivél 15</Text>
        </View>
      </View>

      <View style={styles.subcontainerBottom}>
        
      </View>
    </View>
  );
}