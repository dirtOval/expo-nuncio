
import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  messageBox: {
    backgroundColor: colors.appBG,
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
  },
  messageInput: {
    outlineStyle: 'solid',
    outlineSize: 1,
    outlineColor: '#fff',
    padding: 5,
    color: '#fff',
    width: '95%',
    height: '100%',
    textWrap: 'true',
    flexShrink: 1,
  }
})

export default styles;
