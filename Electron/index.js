
var app = require('app');  
var BrowserWindow = require('browser-window');  
var mainWindow = null;

require('crash-reporter').start();


// Quando a Aplicação for fechada
app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
  }
});

// Quando a aplicação estiver pronta
app.on('ready', function() {
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadUrl('file://' + __dirname + '/html/index.html');
    //mainWindow.openDevTools();
    mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
