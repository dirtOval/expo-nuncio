import { View, Text } from 'react-native';
import styles from './styles';

export default function Message() {
  return (
    <View style={styles.messageBubble}>
      <Text style={styles.messageText}>I'm a message! ;)</Text>
    </View>
  );
}
