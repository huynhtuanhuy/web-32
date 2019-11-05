const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({}));

mongoose.connect(
    'mongodb://localhost/hotgirl-32',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) console.log(err)
        else console.log("DB connect success!");
    }
);

const UserRouter = require('./routers/user');
const PostRouter = require('./routers/post');
const ActiveRouter = require('./routers/active');

app.use('/api/users', UserRouter);
app.use('/api/posts', PostRouter);
app.use('/api/actives', ActiveRouter);

app.listen(6969, (err) => {
    if (err) console.log(err)
    else console.log("Server start success!");
});