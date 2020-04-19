const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const axios = require('axios')
const stringify = require('json-stringify-safe')

app.use(bodyParser.json())
const ACAO = process.env.ACAO || "*"
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', ACAO)
    next()
})

app.post('/', async(req, res) => {
    if (req.body.urlget) {
        try {
            const timeout = req.body.timeout || 2000
            const response = await axios(req.body.urlget, {
                timeout: timeout
            })
            res.json(JSON.parse(stringify(response)))
            console.log ('\x1b[37m', 'The request to the ' + req.body.urlget + ' website worked')
        }
        catch (e) {
            res.send('Cannot hit target -> ' + e)
            console.error('\x1b[31m', 'Cannot hit target -> ' + e)
        }
    }
    else {
        res.send('Specify "urlget" request body')
        console.error('\x1b[31m', 'Error client -> Specify "urlget" request body')
    }
})

const port = process.env.PORT || 8080
app.listen(port, function () {
    console.log('\x1b[37m', `Server listening on port ${port}`)
})