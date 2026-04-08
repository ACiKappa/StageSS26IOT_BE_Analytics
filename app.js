// app.js

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const routes = require('./routes')


const app = express();

// Middleware -------------------------------------
app.use(express.json());
app.use(cookieParser());


app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true,
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Routes ---------------------------------------

app.use('/api', routes);

// Hello world

app.get('/hello', (req,res) => {
    res.send("Server in ascolto");
})

// Errori ---------------------------------------

app.use((err, req, res, next)=> {
    console.error(err.stack);
    res.status(500).json({ errore: err.message });
});

module.exports = app;
