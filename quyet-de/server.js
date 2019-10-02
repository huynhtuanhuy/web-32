const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// frontend router
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/answer.html');
});

app.get('/ask', (request, response) => {
    response.sendFile(__dirname + '/views/ask.html');
});

app.get('/question', (request, response) => {
    response.sendFile(__dirname + '/views/questionDetail.html');
});

// backend router
app.post('/add-question', (request, response) => {
    console.log(request.body.question);
});

app.listen(6969, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server start success!");
    }
});