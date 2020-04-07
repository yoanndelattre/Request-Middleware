const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const axios = require('axios')
const stringify = require('json-stringify-safe')

app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    next();
})

app.post('/', async(req, res) => {
    // For GET request
    if (req.body.method === 'GET') {
        const response = await axios(req.body.urlget)
        res.json(JSON.parse(stringify(response)))
    }
    // For POST request
    if (req.body.method === 'POST') {
        console.log('post request')
    }
})

const port = process.env.PORT || 8080
app.listen(port, function () {
    console.log(`Server listening on port ${port}`);
});