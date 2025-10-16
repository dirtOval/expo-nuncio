import { View, Text, TextInput, Button } from 'react-native';
import {useState} from 'react';

import styles from './styles';

export default function LoginScreen() {
  const [loginName, setLoginName] = useState('');

  return (
    <View style={styles.loginView}>
      <Text style={styles.loginText}>Name?</Text>
      <TextInput style={styles.loginInput}
                 onChangeText={setLoginName}
                 value={loginName}></TextInput>
    </View>
  )
}
