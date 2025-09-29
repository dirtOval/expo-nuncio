import { Server } from 'socket.io';

const io = new Server({
  cors: {
    origin: ['http://localhost:8081'], //might need to change
  }
})

io.on('connection', (socket) => {
  console.log('someone connected!');
});


io.listen(3000);
