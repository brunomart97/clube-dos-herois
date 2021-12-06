import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

export function Badge() {
  const navigation = useNavigation<NavigationProps>();

  function navigateToBackHome() {
    navigation.navigate('Home');
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={navigateToBackHome}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={50}
            position="center"
            color={theme.colors.white}
          />
        </Pressable>
      </View>
    </ScrollView>
  );
}