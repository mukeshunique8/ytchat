

const { Socket } = require('dgram');
const express = require('express')
const app = express();

const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));


// handle socked communication for chat functionalities

io.on('connection',(socket)=>{

    console.log("A user connected");

    socket.on('join-chat',(chatId)=>{
        socket.join(chatId)
    })

    socket.on('send-message',(message)=>{
      io.to(message.chatId).emit('new-message',message)
    })

    socket.on('disconnect',()=>{

        console.log('A user disconnected');

    })


})


http.listen(3000,()=>{
    console.log('Server is listening on the port 3000');
})