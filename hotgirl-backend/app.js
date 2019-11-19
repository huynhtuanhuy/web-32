const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session')

const app = express();

app.use(session({
    secret: 'xjnCh40c4CpAn',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 7*24*60*60*1000 //milisecond
    }
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({}));

app.use((req, res, next) => {
    console.log(req.sessionID);
    console.log(req.session);
    next();
});

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
const AuthRouter = require('./routers/auth');

app.use('/api/users', UserRouter);
app.use('/api/posts', PostRouter);
app.use('/api/actives', ActiveRouter);
app.use('/api/auth', AuthRouter);

app.listen(6969, (err) => {
    if (err) console.log(err)
    else console.log("Server start success!");
});