  const io= require('socket.io-client');

  const socket = io(`http://localhost:8080`);

  socket.on('connect',()=>{
    console.log("Welcome i received");    
  });

  document.getElementById('emit').addEventListener('click',()=>{
    socket.emit('test');
  })