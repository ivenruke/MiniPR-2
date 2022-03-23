import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Score from "./components/Score";
// 다른 불러올 js파일, 경로설정
// Route : 다른 주소에 다른 화면을 보여줌
// 라우터 이용을 위한 react-router-dom 패키지 설치

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/score/:dayoftheweek" exact>
        <Score />
      </Route>
    </div>
  );
}
// path : "/" 처음 보여줄 페이지
// URL 파라미터 : 똑같은 뷰일때, 뷰 하나에다가 안에 있는 데이터만 갈아끼울 수 있도록 함 (동적 라우팅)
// 사용방법 -> :변수명
// exact X : 포함하면 다 보여줘
// exact O : path에 주어진 경로와 정확히 맞아 떨어져야만 설정한 컴포넌트를 렌더링합니다

export default App;
