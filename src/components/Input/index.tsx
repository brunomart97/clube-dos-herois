import React from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';
import { TextInputProps } from "react-native";

import { styles } from './styles';

import {
  maskCep,
  maskPhone
} from '../../utils/masks';

interface InputProps extends TextInputProps {
  title: string,
  mask?: "cep" | "phone" | "currency",
  inputMaskChange?: any
}

export const Input: React.FC<InputProps> = ({
  title,
  mask,
  inputMaskChange,
  ...rest
}) => {
  function handleChange(text: string) {
    if(mask === undefined) {
      const value = text;
      inputMaskChange(value);
    }
    if(mask === 'cep') {
      const value = maskCep(text);
      inputMaskChange(value);
    }
    if(mask === 'phone') {
      const value = maskPhone(text);
      inputMaskChange(value);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => handleChange(text)}
        { ...rest }
      />
    </View>
  );
}