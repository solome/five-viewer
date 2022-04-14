import { app, BrowserWindow } from 'electron'

console.log('hello world.', process.env.NODE_ENV)

app.on('ready', () => {
  const browserWindow = new BrowserWindow()
  if (process.env.NODE_ENV === 'development') {
    browserWindow.loadURL('http://localhost:3088/index.html')
  } else {
    browserWindow.loadFile('./index.html')
  }
})

app.on('window-all-closed', () => {
  app.quit()
})

