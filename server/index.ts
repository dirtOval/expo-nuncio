import { Server } from 'socket.io';

import ip from '../ip.js';

const io = new Server({
  cors: {
    origin: [ip], //might need to change
  }
})

io.on('connection', (socket) => {
  console.log('someone connected!');

  socket.on('disconnect', () => {
      console.log('user disconnected');
    });

});


io.listen(3000);
console.log('server is listening on 3000!');
