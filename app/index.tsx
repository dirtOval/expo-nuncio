import { Text, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Message from '../components/Message/Message';
import MessageFeed from '../components/MessageFeed/MessageFeed';
import MessageBox from '../components/MessageBox/MessageBox';

//for testing
//import messages from '../constants/testMessages.js';

// const message = 'im deirdre';
const message = {
  user: 'deirdre',
  content: 'im deirdre',
}

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Messages</Text>
        <MessageFeed user="mike" />
        <MessageBox />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    //alignItems: 'center',
    justifyContent: 'start',
  },
  header: {
    marginTop: 25,
    color: '#fff',
    fontSize: 48,
  },
})
