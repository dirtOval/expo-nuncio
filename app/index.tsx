import { Text, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Message from '../components/Message/Message';
import MessageFeed from '../components/MessageFeed/MessageFeed';
import MessageBox from '../components/MessageBox/MessageBox';
import colors from '../constants/colors';

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
        <KeyboardAvoidingView style={styles.keyboardAvoider}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Text style={styles.header}>Messages</Text>
          <MessageFeed user="mike" />
          <MessageBox />
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
  },
  keyboardAvoider: {
    flex: 1,
  },
  header: {
    marginTop: 25,
    color: '#fff',
    fontSize: 48,
  },
})
