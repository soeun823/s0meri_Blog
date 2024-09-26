// 서버의 중심 파일 이 될겁니다
// express 라는 서버 프레임 워크 사용

const http = require("http"); //내장 모듈
const app = http.createServer( (req, res) => {
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
    if(req.url === "/"){
        res.end("기숙사 가고싶어여");
    }else if(req.url === "/login"){
        res.end("여기는 긱사야")
    }
});

app.listen(3001, () => {
    console.log("http로 가동된 서버");
});

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//     res.send("여기는 루트 입니다");
// });

// app.get("/login", (req, res) => {
//     res.send("여기는 로그인 화면 입니다");
// });

// app.listen(3000, () => {
//     console.log("서버 가동");
// });