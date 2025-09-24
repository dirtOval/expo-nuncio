import { View, Text } from 'react-native';
import styles from './styles';

export default function Message({content, user}) {
  return (
    <View style={styles.messageBubble}>
      <Text style={styles.username}>{user}</Text>
      <Text style={styles.messageText}>{content}</Text>
    </View>
  );
}
