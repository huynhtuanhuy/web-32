const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost/quyetde-32',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) console.log(err)
        else console.log("DB connect success!!");
    }
);

const questionModel = require('./models/question');

questionModel.find({
    // query
}).then(data => {
    console.log("Data: ", data);
}).catch(error => {
    console.log(error);
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// frontend router
app.get('/', (request, response) => {
    const fileData = fs.readFileSync("questions.json", "utf-8");
    const questionList = JSON.parse(fileData);
    const randomIndex = Math.floor(Math.random()*questionList.length);
    const randomQuestion = questionList[randomIndex];

    if (randomQuestion) {
        const questionDetailHTML = fs.readFileSync("views/answer.html", "utf-8");
        const htmlWithData = questionDetailHTML
            .replace("question_content", randomQuestion.content)
            .replace("question_index", randomIndex)
            .replace("question_index_2", randomIndex);
    
        response.send(htmlWithData);
    } else {
        response.send("Câu hỏi không tồn tại!");
    }
});

app.get('/ask', (request, response) => {
    response.sendFile(__dirname + '/views/ask.html');
});

// /question/1378
app.post('/answer/:questionIndex', (request, response) => {
    const fileData = fs.readFileSync("questions.json", "utf-8");
    const questionList = JSON.parse(fileData);
    const question = questionList[request.params.questionIndex];

    if (request.body.answer == "yes") {
        question.yes += 1;
    } else {
        question.no += 1;
    }

    questionList[request.params.questionIndex] = question;
    fs.writeFileSync("questions.json", JSON.stringify(questionList));
    // console.log(request.body);
    response.redirect(`/question/${request.params.questionIndex}`);
});

app.get('/question/:questionIndex', (request, response) => {
    const fileData = fs.readFileSync("questions.json", "utf-8");
    const questionList = JSON.parse(fileData);
    const question = questionList[request.params.questionIndex];
    
    if (question) {
        const questionDetailHTML = fs.readFileSync("views/questionDetail.html", "utf-8");
        const htmlWithData = questionDetailHTML
            .replace("question_content", question.content)
            .replace("total_vote", question.yes + question.no)
            .replace("vote_yes", question.yes)
            .replace("vote_no", question.no);
    
        response.send(htmlWithData);
    } else {
        response.send("Câu hỏi không tồn tại!");
    }
});

// backend router
app.post('/add-question', (request, response) => {
    const questionContent = request.body.question;

    questionModel.create({
        content: questionContent,
    }).then(questionCreated => {
        response.redirect(`/question/${questionCreated._id}`);
    }).catch(error => {
        console.log(error);
    });
});

app.listen(6969, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server start success!");
    }
});