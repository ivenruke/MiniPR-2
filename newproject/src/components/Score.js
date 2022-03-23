import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
// 다른 불러올 js파일, 경로설정
// 라우터 이용을 위한 react-router-dom 패키지 설치
// 화면 전환을 위한 component없이 history와 같은 훅 사용 : useHistory
// useParams-> App.js 15번째줄 URL파라미터(:dayoftheweek) 불러오게하는 react-router-dom의 훅

const Score = (props) => {
  const params = useParams();
  //ULR파라미터를 사용하기 위한 useParams
  const history = useHistory();
  // component없이 history와 같은 훅 사용 : useHistory
  const [circle, setCircle] = useState([0, 1, 2, 3, 4]);
  const [idx, setIdx] = React.useState();
  //idx:state값, setIdx:idx를 수정하는 함수, React.useState()->초기값이 없는 state만드는 리액트훅

  // 컴포넌트에선 무조건 하나 return해줘야함
  return (
    <Container>
      <h1>
        <Day>{params.dayoftheweek}요일</Day> 평점 남기기
      </h1>
      <Line>
        {circle.map((e, i) => {
          return (
            <Circle
              key={i}
              onClick={() => {
                setIdx(i);
              }}
              style={{ backgroundColor: i <= idx ? "pink" : "grey" }}
            />
          );
        })}
      </Line>
      {/* 동그라미 */}
      <Button onClick={() => history.push("/")}>평점 남기기</Button>
      {/* props 쓰지 않아도 useHistory를 했기 때문에 바로 history사용, push : */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Day = styled.span`
  background-color: purple;
  border-radius: 5px;
  color: white;
`;

const Line = styled.div`
  display: flex;
  flex-direction: row;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 5px;
  }
`;

const Button = styled.button`
  width: 7vw;
  height: 6vh;
  margin-top: 20px;
  border: 1px solid purple;
  border-radius: 5px;
  font-size: 20px;
  background-color: purple;
  color: white;
`;

export default Score;
