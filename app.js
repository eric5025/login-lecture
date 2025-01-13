"use strict"


const express = require('express');
const app = express();
const PORT = 3000;

const home = require("./routes/home"); // 라우팅

//앱세팅
app.set("views","./views");
app.set("view engine","ejs");


app.use("/", home); //미들웨어를 등록하는 메서드

module.exports = app;