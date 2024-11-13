const express = require('express');
const app = express();

const Users = require('./data/user')

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('home page')
})

app.get('/users',(req,res)=>{
    res.render('user',{Users});
})

app.get('/users/new',(req,res)=>{
    res.render('new');
})

app.post('/users',(req,res)=>{
    console.log(req.body);
    const {username,password,city} = req.body;
    let x = Users[Users.length-1].id
    const user ={
        id: x+1,
        username:username,
        password:password,
        city:city
    }

    Users.push(user);
    res.redirect('/users')
    
})


app.listen(5000,()=>{
    console.log('server run at port 5000')
})