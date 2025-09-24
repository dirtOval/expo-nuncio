import { View, Text } from 'react-native';
import styles from './styles';

export default function Message({content}) {
  return (
    <View style={styles.messageBubble}>
      <Text style={styles.messageText}>{content}</Text>
    </View>
  );
}
