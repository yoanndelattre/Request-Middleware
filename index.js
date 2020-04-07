const express = require('express')
const app = express()
const GET_Request = require('./assets/GET_Request')
const POST_Request = require('./assets/POST_Request')

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
})

app.post('/', (req, res) => {
    // For GET request
    if (req.body.method === 'GET') {
        GET_Request.GET_Request(req, res)
    }
    // For POST request
    if (req.body.method === 'POST') {
        POST_Request.POST_Request(req, res)
    }
})

const port = process.env.PORT || 8080
app.listen(port, function () {
    console.log(`Server listening on port ${port}`);
});