import { Server } from 'socket.io';

import { clientip } from '../ip.js';

//for testing
import messages from '../constants/testMessages.js';

//need a db ultimately, this is temporary
let msgBuffer = [];

const io = new Server({
  cors: {
    origin: [clientip],
    methods: ["GET", "POST"], //might need to change
  }
})

io.on('connection', (socket) => {
  console.log('someone connected!');

  socket.on('request_log', () => {
    console.log('sending message log');
    io.to(socket.id).emit('send_log', msgBuffer);
  });

  socket.on('send_message', (data) => {
    msgBuffer.push(data);
    console.log(msgBuffer);
    // socket.broadcast.emit('new_message', data);
    socket.broadcast.emit('send_log', msgBuffer);
  });

  socket.on('disconnect', () => {
      console.log('user disconnected');
    });

});



io.listen(3000);
console.log('server is listening on 3000!');
