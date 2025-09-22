import { Text, View, StyleSheet } from "react-native";
import Message from '../components/Message/Message'

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Messages</Text>
      <Message/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'start',
  },
  header: {
    marginTop: 25,
    color: '#fff',
    fontSize: 48,
  },
})
