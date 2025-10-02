import { io } from "socket.io-client";
import ip from '../ip.js';

const socket = io(ip, { autoConnect: false });

export default socket;
