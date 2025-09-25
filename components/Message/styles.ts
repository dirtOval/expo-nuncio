import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  messageBubble: {
    //backgroundColor: colors.messageBackground,
    outlineColor: colors.messageOutline,
    outlineStyle: 'solid',
    outlineWidth: 2,
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
    width: '70%',
  },
  sent: {
    backgroundColor: colors.sent,
    alignSelf: 'flex-end',
  },
  received: {
    backgroundColor: colors.received,
  },
  messageText: {
    //color: colors.messageColor
  },
  username: {
    fontSize: 24,
    color: colors.messageColor,
  }
})

export default styles
