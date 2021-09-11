
const axios = require('axios');
const express = require('express');
const app = express();
let leIP = "http://dunt.me:3003"
// leIP = "http://192.168.1.201:3003"
app.use(express.json());
app.use(express.static('public'))
var FormData = require('form-data');

app.get('/', function (req, res) {
    res.send('index');
});

app.post('/add', (req, res) => {

    console.log(req.body);

    axios.post(leIP + "/add",
        { body: req.body.urls }
    ).then(function (response) {
        // console.log(response);
    })
        .catch(function (error) {
            console.log(error);
        });
    res.sendStatus(201);
})

app.get('/getTorrsList', async (req, res) => {
    let tList = await axios.get(leIP + "/getTorrsList")
        .then(function (response) {
            res.json(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
})
var port = process.env.PORT || 3004;

app.listen(port, function () {
    console.log("Listening on port x!")
});
