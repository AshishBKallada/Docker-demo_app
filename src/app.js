const express = require('express');
const app = express();


app.get('/',(req,res,next) => {
    res.send('Docker Demo App')
})

const port = 3000;

app.listen(port,()=>{
    console.log('Server is runnnig');
})