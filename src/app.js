const express = require('express');
const cookieParser = require('cookie-parser');
const indexRoutes = require('./routes/index.routes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', indexRoutes);

module.exports = app;