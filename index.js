require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const SocketServer = require('./socketServer');
const corsOptions = {
  Credential: 'true',
  origin: 'https://social-media-frontend-pink.vercel.app'
};


const app = express();

app.get('/', (req, res) => {
  res.send("Server running");
});

app.use(express.json())
app.options("*" , cors(corsOptions));
app.use(cors(corsOptions));
app.use(cookieParser())


//#region // !Socket
const http = require('http').createServer(app);
const io = require('socket.io')(http);



io.on('connection', socket => {
    SocketServer(socket);
})

//#endregion

//#region // !Routes
app.use('/api', require('./routes/authRouter'));
app.use('/api', require('./routes/userRouter'));
app.use('/api', require('./routes/postRouter'));
app.use('/api', require('./routes/commentRouter'));
app.use('/api', require('./routes/adminRouter'));
app.use('/api', require('./routes/notifyRouter'));
app.use('/api', require('./routes/messageRouter'));
//#endregion



mongoose.connect("mongodb+srv://Rajnisaini:12345@kelltontech.ymypu.mongodb.net/social-media?retryWrites=true&w=majority", {
        useNewUrlParser:true,
    
}, err => {
    if(err) throw err;
    console.log("Database Connected!!")
})

const port = process.env.PORT || 8080;
http.listen(port, () => {
  console.log("Listening on", port);
});