// 서버의 중심 파일 이 될겁니다
// express 라는 서버 프레임 워크 사용

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("여기는 루트 입니다");
});

app.get("/login", (req, res) => {
    res.send("여기는 로그인 화면 입니다");
});

app.listen(3000, () => {
    console.log("서버 가동");
});