import { FlatList, ScrollView } from 'react-native';
import Message from '../Message/Message';
import styles from './styles';
//import messages from '../../constants/testMessages.js';

export default function MessageFeed({user, messages, ref}) {
  return (
    <FlatList
      ref={ref}
      style={styles.messageFeed}
      data={messages}
      onContentSizeChange={() => ref.current.scrollToEnd()}
      renderItem={({item}) => <Message content={item.content}
                                    sender={item.sender}
                                    user={user} /> } />
  );
}
