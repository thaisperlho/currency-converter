const express = require('express')
const axios = require('axios');

const app = express()

function getCurrency(){
    var config = {
        method: 'get',
        url: 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL',
    };
    return axios(config)
}

app.post('/api/currency', (req, res) => {
    getCurrency().then(r => {
        res.send(r.data)
    })
})

app.get('/api/currency', (req, res) => {
    res.send('Servidor rodando, tudo ok')
})


app.listen(3000)


