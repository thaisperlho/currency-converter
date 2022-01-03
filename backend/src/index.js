const express = require('express')
const getCurrency = require('./http')

const app = express()


app.post('/api/currency', (req, res) => {
    getCurrency().then(data => {
        console.log(data)
        res.send("ok")
    })

})

app.get('/api/currency', (req, res) => {
    res.send('Servidor rodando, tudo ok')
})


app.listen(3000)


