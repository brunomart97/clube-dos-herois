import React from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

import { styles } from './styles';

export function Form({
  title,
  placeholder
}: formProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={false}
      />
    </View>
  );
}