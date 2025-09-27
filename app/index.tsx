import { Text, View, StyleSheet } from "react-native";
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
    <View style={styles.container}>
      <Text style={styles.header}>Messages</Text>
      <MessageFeed user="mike" />
      <MessageBox />
    </View>
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
