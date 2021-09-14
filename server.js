const express = require('express');
const app = express()
const porta = 300
const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/portfolio',{
    useNewUrlParser:true, 
    useUnifiedTopology: true
})
app.set('view engine','ejs')

app.get('/', (req,res) => {
    res.render('index', {texto:5+2})
}) 
app.listen(porta, () => {
    console.log(`rodando servidor na porta ${porta}`);
});
