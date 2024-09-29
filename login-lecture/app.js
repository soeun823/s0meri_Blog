// 서버의 중심 파일 이 될겁니다
// express 라는 서버 프레임 워크 사용

"use strict";

//모듈
const express = require("express");
const app = express();

const PORT = 3000;

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

//라우팅
const home = require("./routes/home");//상대적으로 명시
app.use("/",home); //use() -> 미들웨어를 등록 해주는 매서드..

app.listen(PORT, () => {
    console.log("서버 가동");
});