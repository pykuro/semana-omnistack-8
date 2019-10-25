const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://paula:8rke5e1PR83JFPOD@cluster0-jq01b.mongodb.net/omnistack?retryWrites=true&w=majority',{
    useNewUrlParser: true 
});

server.use(cors());

server.use(express.json());
server.use(routes);

server.listen(3333);