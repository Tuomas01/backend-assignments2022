'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const authRouter = require('./routes/authRoute');
const passport = require('./utils/passport');
const catRouter = require('./routes/catRoute');
const userRouter = require('./routes/userRoute');
const port = 3000;

// server uploaded files
app.use(express.static("uploads"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

app.use('/auth', authRouter);
app.use('/cat', passport.authenticate('jwt', {session: false}), catRouter);
app.use('/user', passport.authenticate('jwt', {session: false}), userRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
