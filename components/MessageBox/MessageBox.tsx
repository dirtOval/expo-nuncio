import { View, TextInput } from 'react-native';
import { useState } from 'react';
import styles from './styles';

export default function MessageBox() {
  const [text, onChangeText] = useState('');

  return (
    <View style={styles.messageBox}>
      <TextInput style={styles.messageInput} onChangeText={onChangeText} value={text} />
    </View>
  );
}
