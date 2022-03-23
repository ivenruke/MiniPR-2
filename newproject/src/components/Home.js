import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useState } from "react";
// 다른 불러올 js파일, 경로설정
// 라우터 이용을 위한 react-router-dom 패키지 설치
// 화면 전환을 위한 component없이 history와 같은 훅 사용 : useHistory
// useParams-> App.js 15번째줄 URL파라미터(:dayoftheweek) 불러오게하는 react-router-dom의 훅

const Home = (props) => {
  const history = useHistory();
  // 페이지 이동을 위한 History
  const [circle, setCircle] = useState([0, 1, 2, 3, 4]);
  const [list, setList] = useState(["월", "화", "수", "목", "금", "토", "일"]);
  // 컴포넌트에선 무조건 하나 return해줘야함
  return (
    <>
      <Title>내 일주일은?</Title>
      {list.map((list, index) => {
        const getRandom = (min, max) =>
          Math.floor(Math.random() * (max - min) + min);
        const num = getRandom(0, 5);
        return (
          <Container>
            <Pont>{list}</Pont>
            {/* 5칸 만들기  */}
            {circle.map((e, i) => {
              return (
                <Circle
                  key={i}
                  style={{ backgroundColor: i <= num ? "pink" : "grey" }}
                />
              );
            })}
            <Triangle
              onClick={() => {
                history.push("/score/" + list);
              }}
            />
            {/* props 쓰지 않아도 useHistory를 했기 때문에 바로 history사용, push: 페이지 이동 */}
          </Container>
        );
      })}
    </>
  );
};

const Title = styled.h1`
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Pont = styled.h3`
  padding: 5px;
  padding-right: 8px;
  border-radius: 30px;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 5px;
`;

const Triangle = styled.div`
  border-bottom: 15px solid transparent;
  border-top: 15px solid transparent;
  border-left: 1.6rem solid purple;
  margin-left: 5px;
`;

export default Home;
