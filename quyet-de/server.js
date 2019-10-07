const express = require('express');
const fs = require('fs');
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

// /question/1378
app.get('/question/:questionIndex', (request, response) => {
    const fileData = fs.readFileSync("questions.json", "utf-8");
    const questionList = JSON.parse(fileData);
    const question = questionList[request.params.questionIndex];
    
    if (question) {
        const questionDetailHTML = fs.readFileSync("views/questionDetail.html", "utf-8");
        const htmlWithData = questionDetailHTML
            .replace("question_content", question.content)
            .replace("total_vote", question.yes + question.no);
    
        response.send(htmlWithData);
    } else {
        response.send("Câu hỏi không tồn tại!");
    }
});

// backend router
app.post('/add-question', (request, response) => {
    const fileData = fs.readFileSync("questions.json", "utf-8");
    const questionList = JSON.parse(fileData);
    const questionContent = request.body.question;

    questionList.push({
        content: questionContent,
        yes: 0,
        no: 0,
    });

    fs.writeFileSync("questions.json", JSON.stringify(questionList));

    response.redirect(`/question/${questionList.length - 1}`);
});

app.listen(6969, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server start success!");
    }
});