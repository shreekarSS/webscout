import app from './api/app.js'

const port = 8080;
// Telling the app to listen on port 8080 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});  