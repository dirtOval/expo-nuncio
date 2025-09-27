import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  messageFeed: {
    flex: 1,
    backgroundColor: colors.feedBackground,
    outlineColor: colors.feedOutline,
    outlineStyle: 'solid',
    outlineWidth: 2,
    height: '50%',
    //width: 100%,
  }
})
