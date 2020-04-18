const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const axios = require('axios')
const stringify = require('json-stringify-safe')

app.use(bodyParser.json())
const ACAO = process.env.ACAO || "*"
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', ACAO);
    next();
})

app.post('/', async(req, res) => {
    if (req.body.urlget) {
        const response = await axios(req.body.urlget)
        res.json(JSON.parse(stringify(response)))
        console.log ('The request to the ' + req.body.urlget + ' website worked')
    }
    else if (!req.body.urlget) {
        res.status(500).send('Specify "urlget" request body')
        console.error('Error client -> Specify "urlget" request body')
    }
})

const port = process.env.PORT || 8080
app.listen(port, function () {
    console.log(`Server listening on port ${port}`);
});