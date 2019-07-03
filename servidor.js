const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))
app.use('desafio/answer.js', bodyParser.json())

app.get( (req,res) => {
    return res.send('Ok')
})
app.listen(8080, () => console.log('Executando'))
