import { Text, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { useState, useEffect, useRef } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Message from '../components/Message/Message';
import MessageFeed from '../components/MessageFeed/MessageFeed';
import MessageBox from '../components/MessageBox/MessageBox';
import colors from '../constants/colors';

//for testing
//import messages from '../constants/testMessages.js';

//socket stuff
import socket from './socket';



export default function Index() {
  const [messages, setMessages] = useState([]);
  const [composing, setComposing] = useState(false);
  const messageFeedRef = useRef(null);

  async function msgInit() {
    socket.connect();
    socket.emit('request_log');
  }

  useEffect(() => {
    //get messages on connect
    msgInit();

    //event listeners otherwise
    socket.on('send_log', (data) => {
      setMessages(data);
    })
  }, []);

  const addMessage = (content) => {
    const newMsg = {sender: 'mike', content: content, user: 'mike' }
    setMessages([...messages, newMsg])
  };

  const onLayout = () => {
    if (messageFeedRef && composing) {
      messageFeedRef.current.scrollToEnd();
    }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.keyboardAvoider}
          onLayout={onLayout}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Text style={styles.header}>Messages</Text>
          <MessageFeed ref={messageFeedRef} user="mike" messages={messages} />
          <MessageBox addMessage={addMessage} feedRef={messageFeedRef} setComposing={setComposing}/>
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
