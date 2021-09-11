const express = require('express');
const app = express()
const porta = 300

app.get('/', (req,res) => {
    res.send('hola locos')
}) 
app.listen(porta);