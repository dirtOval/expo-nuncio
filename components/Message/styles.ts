import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  messageBubble: {
    backgroundColor: colors.messageBackground,
    outlineColor: colors.messageOutline,
    outlineStyle: 'solid',
    outlineWidth: 2,
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
  },
  messageText: {
    color: colors.messageColor
  },
})

export default styles
