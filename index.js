const express = require('express')
const { connectsignupdb } = require('./connection/signup')
const signrouter = require('./routers/signup')
const cors = require('cors')

const PORT = 8000;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // To parse JSON bodies

//connection
connectsignupdb('mongodb://127.0.0.1:27017/SignUp').then(() => console.log("MongoDb is sonnected Success"))

// Allow requests from this origin 
app.use(cors({
    origin: 'http://localhost:5173', // No trailing slash
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Add all HTTP methods you're using
    allowedHeaders: ['Content-Type', 'Authorization']
}));

//routes
app.use('/api/', signrouter)


app.listen(PORT, () => console.log(`Server is starting at port ${PORT}`))