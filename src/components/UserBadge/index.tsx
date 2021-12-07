import React from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';
import DashedLine from 'react-native-dashed-line';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import paperBackgroung from '../../assets/paperBackgroung.png';

export function UserBadge() {
  const urlImage: string = 'https://github.com/brunomart97.png';

  return (
    <View style={styles.container}>
      <View style={styles.subcontainerTop}>
        <DashedLine
          style={{marginTop: -3}}
          dashLength={10}
          dashThickness={8}
          dashGap={5}
          dashColor={theme.colors.white}
          dashStyle={{borderRadius: 5 }}
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
      </View>

      <View style={styles.subcontainerBottom}>
        <DashedLine
          style={{marginTop: -3}}
          dashLength={10}
          dashThickness={8}
          dashGap={5}
          dashColor={theme.colors.white}
          dashStyle={{borderRadius: 5 }}
          />
        <DashedLine
          style={{marginBottom: -3}}
          dashLength={10}
          dashThickness={8}
          dashGap={5}
          dashColor={theme.colors.white}
          dashStyle={{borderRadius: 5 }}
        />
      </View>
    </View>
  );
}