// 서버의 중심 파일 이 될겁니다
// express 라는 서버 프레임 워크 사용

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="ko">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>

        <body>
            여기는 루트입니다.
        </body>

        </html>
    `);
});

app.get("/login", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="ko">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>

        <body>
            <input type="text" name="" id="" placeholder="아이디"><br>
            <input type="text" name="" id="" placeholder="비밀번호"><br>
            <button>로그인</button>
        </body>

        </html>
    `);
});

app.listen(3000, () => {
    console.log("서버 가동");
});