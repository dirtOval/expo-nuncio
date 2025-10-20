import {Text, KeyboardAvoidingView, Platform} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState, useRef, useEffect } from 'react';
import MessageFeed from '../MessageFeed/MessageFeed';
import MessageBox from '../MessageBox/MessageBox';
import styles from './styles';

export default function MessageView({socket, name}) { 
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
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardAvoider}
        onLayout={onLayout}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Text style={styles.header}>Messages</Text>
        <MessageFeed ref={messageFeedRef} user={name} messages={messages} />
        <MessageBox addMessage={addMessage} feedRef={messageFeedRef} setComposing={setComposing}/>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
