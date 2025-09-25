import { View, Text } from 'react-native';
import styles from './styles';

export default function Message({content, sender, user}) {
  return (
    <View style={[styles.messageBubble, sender === user ? styles.sent : styles.received]}>
      <Text style={styles.username}>{sender}</Text>
      <Text style={styles.messageText}>{content}</Text>
    </View>
  );
}
