"use strict"


const express = require('express');
const app = express();
const PORT = 3000;

const home = require("./src/routes/home"); // 라우팅

//앱세팅
app.set("views","./src/views");
app.set("view engine","ejs");

app.use(express.static(__dirname+'/src/public')) //왜이러냐 $빼니까되네네

app.use("/", home); //미들웨어를 등록하는 메서드

module.exports = app;