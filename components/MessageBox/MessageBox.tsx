import { View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import styles from './styles';
import colors from '../../constants/colors';

export default function MessageBox() {
  const [text, onChangeText] = useState('');

  return (
    <View style={styles.messageBox}>
      <TextInput style={styles.messageInput} onChangeText={onChangeText} value={text} />
      <Button title="send" />
    </View>
  );
}

// const sendMessage = ()
