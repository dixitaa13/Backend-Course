require('dotenv').config()
const express = require('express')
const app = express()

const port = process.env.PORT

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/twitter',(req,res)=>{
    res.send('dixita13')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Logged in successfully</h1>')
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})

