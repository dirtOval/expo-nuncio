import { ScrollView } from 'react-native';
import Message from '../Message/Message';

import messages from '../../constants/testMessages.js';

export default function MessageFeed() {
  return (
    <ScrollView>
      {messages.map((msg, idx) => (
        <Message key={idx} content={msg.content} user={msg.user} />
      ))}
    </ScrollView>
  );
}
