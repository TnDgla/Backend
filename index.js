const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('working fine')
})

app.get('/about',(req,res)=>{
    res.send('about page hai')
})

app.get('/cat',(req,res)=>{
    res.send('mewwwww')
})

app.get('/*',(req,res)=>{
    res.send('404 page not found')
})

app.listen(4000);