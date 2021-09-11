const express = require('express');
const app = express()
const porta = 300
const mongoose = require("mongoose")

app.get('/', (req,res) => {
    res.send('hola locos')
}) 
app.listen(porta, () => {
    console.log(`roando seridor na porta ${porta}`);
});
