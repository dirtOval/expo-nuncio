import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    backgroundColor: colors.appBG,
    //alignItems: 'center',
    justifyContent: 'start',
    alignItems: 'center',
  },
  keyboardAvoider: {
    flex: 1,
    width: '100%',
    
  },
  header: {
    marginTop: 25,
    color: '#fff',
    fontSize: 48,
  },
})

export default styles;
