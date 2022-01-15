import React from 'react';
import {
  ScrollView,
  Pressable,
  Text
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { Form } from '../../components/Form';

export function Profile() {
  function handleSaveEdition() {
  }

  return (
    <ScrollView style={styles.container}>
      <Form
        title="Nome"
        placeholder="Digite seu nome"
      />
      <Form
        title="E-mail"
        placeholder="Digite seu e-mail"
      />
      <Pressable
        style={styles.saveButton}
        onPress={handleSaveEdition}
      >
        <Ionicons
          name="md-save-outline"
          size={23}
          position="center"
          color={theme.colors.white}
        />
        <Text style={styles.buttonText}>Salvar</Text>
      </Pressable>
    </ScrollView>
  );
}