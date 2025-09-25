import { View, TextInput } from 'react-native';
import { useState } from 'react';

export default function MessageBox() {
  const [text, onChangeText] = useState('');

  return (
    <View>
      <TextInput onChangeText={onChangeText} value={text} />
    </View>
  );
}
