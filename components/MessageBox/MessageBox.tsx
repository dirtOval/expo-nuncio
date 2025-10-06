import { View, TextInput, Button, Keyboard } from 'react-native';
import { useState, useEffect } from 'react';
import styles from './styles';
import colors from '../../constants/colors';

export default function MessageBox({ addMessage, feedRef, setComposing }) {
  const [text, setText] = useState('');

  useEffect(() => {
    const keyboardDidShow = Keyboard.addListener(
      'keyboardDidShow',
      () => { setComposing(true) }
    );

    const keyboardDidHide = Keyboard.addListener(
      'keyboardDidHide',
      () => { setComposing(false) }
    );
    
  })

  const sendMessage = () => {
    addMessage(text);
    setText('')
    feedRef.current.scrollToEnd();
  }

  // const onFocus = () => {
  //   setComposing(true);
  //   //feedRef.current.scrollToEnd();
  // }
  //
  // const onBlur = () => {
  //   console.log('text input blurring!');
  //   setComposing(false);
  // }

  return (
    <View style={styles.messageBox}>
      <TextInput style={styles.messageInput}
                 onChangeText={setText}
                 // onFocus={onFocus}
                 // onBlur={onBlur}
                 value={text} />
      <Button title="send" onPress={sendMessage}/>
    </View>
  );
}

