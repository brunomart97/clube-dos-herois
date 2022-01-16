import React, { useState } from 'react';
import {
  ScrollView,
  Pressable,
  Text
} from 'react-native';

import { styles } from './styles';

import { Input } from '../../components/Input';

export function Profile() {
  const [name, setName] = useState("");
  const [cep, setCep] = useState("");
  const [phone, setPhone] = useState("");

  function handleSaveEdition() {
  }

  return (
    <ScrollView style={styles.container}>
      <Input
        title="Nome"
        inputMaskChange={(text: string) => setName(text)}
        value={name}
        placeholder="Digite seu nome"
        maxLength={40}
        secureTextEntry={false}
      />

      <Input
        title="CEP"
        mask="cep"
        inputMaskChange={(text: string) => setCep(text)}
        value={cep}
        placeholder="Digite seu CEP"
        maxLength={9}
        secureTextEntry={false}
      />

      <Input
        title="Telefone"
        mask="phone"
        inputMaskChange={(text: string) => setPhone(text)}
        value={phone}
        placeholder="Digite seu telefone"
        maxLength={14}
        secureTextEntry={false}
      />

      <Pressable
        style={styles.saveButton}
        onPress={handleSaveEdition}
      >
        <Text style={styles.buttonText}>Salvar</Text>
      </Pressable>
    </ScrollView>
  );
}