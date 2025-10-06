import { io } from "socket.io-client";
import { serverip } from '../ip.js';

const socket = io(serverip, { autoConnect: false });

export default socket;
