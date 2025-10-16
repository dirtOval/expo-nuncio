import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  loginView: {
    zIndex: 666,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginText: {
    color: '#fff',
  },

  loginInput: { 
    outlineStyle: 'solid',
    outlineSize: 1,
    outlineColor: '#fff',
    padding: 5,
    color: '#fff',
    width: '33%',
    height: 10,
    textWrap: 'true',
    flexShrink: 1,
  }
})

export default styles;
