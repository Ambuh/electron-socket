// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

const server=require('http').createServer(app)

const io=require('socket.io').listen(server);

io.on('connection',(socket)=>{
  socket.on('test',function(){
    console.log('gone');
  })
  console.log("a client is connected");
});
io.on('test',()=>{
  console.log("test confirmed");
});
server.listen(8080,(server)=>{
 
  console.log("listening to port 8080");
});


function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration:true,
    }
  })
  mainWindow.loadFile('index.html')
}
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {

    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})