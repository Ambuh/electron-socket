// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const io= require('socket.io-client');

  const socket = io(`http://localhost:8080`);

  socket.on('connect',()=>{
    console.log("Welcome i received");

    socket.emit('test');
  })
 
  
})

class databaseConnection{/*interface for all the  database connections*/

  constructor(cas){
    this.case=cas;
  }
  selectQuery(arr,table,whereclause){

  }
  updateQuery(table,field,values,whereclause){

  }
  insertQuery(/*fields */fields,/*table container*/table,/*values*/values){

  }

}