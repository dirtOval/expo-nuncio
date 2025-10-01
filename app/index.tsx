import { Text, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { useState, useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Message from '../components/Message/Message';
import MessageFeed from '../components/MessageFeed/MessageFeed';
import MessageBox from '../components/MessageBox/MessageBox';
import colors from '../constants/colors';

//for testing
import messages from '../constants/testMessages.js';

//socket stuff
import socket from './socket';

// const message = 'im deirdre';
// const message = {
//   user: 'deirdre',
//   content: 'im deirdre',
// }

const getMessages = () => {
  //it's a dummy function rn, eventually this will pull from db
  return messages;
}


export default function Index() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    let msgLog = getMessages()
    setMessages(msgLog);

    //for now
    socket.connect();
  }, []);

  const addMessage = (content) => {
    const newMsg = {sender: 'mike', content: content, user: 'mike' }
    setMessages([...messages, newMsg])
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.keyboardAvoider}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Text style={styles.header}>Messages</Text>
          <MessageFeed user="mike" messages={messages} />
          <MessageBox addMessage={addMessage} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBG,
    //alignItems: 'center',
    justifyContent: 'start',
    alignItems: 'center',
  },
  keyboardAvoider: {
    flex: 1,
    width: '100%',
    
  },
  header: {
    marginTop: 25,
    color: '#fff',
    fontSize: 48,
  },
})
