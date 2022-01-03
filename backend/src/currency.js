const axios = require('axios');

async function getCurrency(){
    var url = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL'
    return (await axios.get(url)).data
}

module.exports = getCurrency
