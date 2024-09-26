// 서버의 중심 파일 이 될겁니다
// express 라는 서버 프레임 워크 사용

const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("서버 가동");
});