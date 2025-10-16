import { Text, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { useState, useEffect, useRef } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Message from '../components/Message/Message';
import MessageFeed from '../components/MessageFeed/MessageFeed';
import MessageBox from '../components/MessageBox/MessageBox';
import LoginScreen from '../components/LoginScreen/LoginScreen';
import colors from '../constants/colors';

//for testing
//import messages from '../constants/testMessages.js';

//socket stuff
import socket from './socket';



export default function Index() {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState('<Unnamed>');
  const [loggedIn, setLoggedIn] = useState(false);
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
      // messageFeedRef.current.scrollToEnd();
    });

    // socket.on('new_message', (data) => {
    //   setMessages([...messages, data]);
    //   console.log(messages);
    //   messageFeedRef.current.scrollToEnd();
    // });

    return () => {
      socket.off('send_log');
      socket.off('new_message');
      //i have heard this is a bad way to do this
      //should have named fns
    }

  }, []);

  const addMessage = (content) => {
    const newMsg = {sender: name, content: content}
    setMessages([...messages, newMsg])
    socket.emit('send_message', newMsg);
    // messageFeedRef.current.scrollToEnd();
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
          <LoginScreen />
          <Text style={styles.header}>Messages</Text>
          <MessageFeed ref={messageFeedRef} user={name} messages={messages} />
          <MessageBox addMessage={addMessage} feedRef={messageFeedRef} setComposing={setComposing}/>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
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
