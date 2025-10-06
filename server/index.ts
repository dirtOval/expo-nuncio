import { Server } from 'socket.io';

import ip from '../ip.js';

//for testing
import messages from '../constants/testMessages.js';

const io = new Server({
  cors: {
    origin: [ip], //might need to change
  }
})

io.on('connection', (socket) => {
  console.log('someone connected!');

  socket.on('request_log', () => {
    console.log('sending messages!');
    io.to(socket.id).emit('send_log', messages);
  });

  socket.on('disconnect', () => {
      console.log('user disconnected');
    });

});



io.listen(3000);
console.log('server is listening on 3000!');
