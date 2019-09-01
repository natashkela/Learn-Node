const path = require('path');

const express = require('express');
const rootDir = require('./util/path.js');
const app = express();

app.use(express.static(path.join(rootDir, 'public')));

app.use('/users',(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","users.html"));
});

app.use('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","index.html"));
});

app.listen(3000);