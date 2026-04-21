import express from 'express';
import cors from 'cors';
import { createServer } from 'node:http';
import {Server} from 'socket.io'
import apiRouter from './routes/index.js';
import { PORT } from './config/serverConfig.js';

const app = express(); // express is used to handle the http request (connection)
const server = createServer(app); // created the server of http module
const io = new Server(server); //server from socket.io handles the web socket request means used to setup the
//web socket connection

/* http module helps to create a common server object that is (server line 9) and it holds the capabilities
of express app and by using the same server (line 9) we are creating the server of socket.io that is (io line 10) 

so here combined of both is server

socket.io works on event driver mechanism
*/
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

io.on('connection',(socket) => {
    console.log(`a user connected`);
})

app.use('/api' , apiRouter)

app.get('/ping', (req, res) => {
    return res.json({ message: 'pong' });
})

server.listen(PORT,() => {
    console.log(`Server is running on PORT ${PORT}`);
})