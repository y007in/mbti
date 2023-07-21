import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar, Button } from "react-bootstrap";
import { QuestionData } from "../assets/data/questiondata";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  font-family: "Yeon Sung", cursive;
`;
const Title = styled.div`
  font-size: 30px;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledButton = styled(Button)`
  background-color: #778899;
  border: none;
  padding: 10px 50px;
  font-size: 36px;
`;
const Question = () => {
  const navigate = useNavigate();
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);
  // console.log(questionNo);
  // console.log(totalScore);

  const handleClickBtn = (n, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + n } : s
    );
    console.log(newScore);
    setTotalScore(newScore);
    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }
  };
  // const handleClickBtnA = (n, type) => {
  //   if (type === "EI") {
  //     //기존 스코어에 더할 값을 계산 (기존값 + 배점)
  //     const addScore = totalScore[0].score + n;
  //     //새로운 객체 생성
  //     const newObject = { id: "EI", score: addScore };
  //     //Splice 함수 활용, 새로운 객체로 대체
  //     totalScore.splice(0, 1, newObject);
  //   } else if (type === "SN") {
  //     const addScore = totalScore[1].score + n;
  //     const newObject = { id: "SN", score: addScore };
  //     totalScore.splice(1, 1, newObject);
  //   } else if (type === "TF") {
  //     const addScore = totalScore[2].score + n;
  //     const newObject = { id: "TF", score: addScore };
  //     totalScore.splice(2, 1, newObject);
  //   } else {
  //     const addScore = totalScore[3].score + n;
  //     const newObject = { id: "JP", score: addScore };
  //     totalScore.splice(3, 1, newObject);
  //   }
  //   setQuestionNo(questionNo + 1);
  // };
  // const handleClickBtnB = (n, type) => {
  //   if (type === "EI") {
  //     //기존 스코어에 더할 값을 계산 (기존값 + 배점)
  //     const addScore = totalScore[0].score + n;
  //     //새로운 객체 생성
  //     const newObject = { id: "EI", score: addScore };
  //     //Splice 함수 활용, 새로운 객체로 대체
  //     totalScore.splice(0, 1, newObject);
  //   } else if (type === "SN") {
  //     const addScore = totalScore[1].score + n;
  //     const newObject = { id: "SN", score: addScore };
  //     totalScore.splice(1, 1, newObject);
  //   } else if (type === "TF") {
  //     const addScore = totalScore[2].score + n;
  //     const newObject = { id: "TF", score: addScore };
  //     totalScore.splice(2, 1, newObject);
  //   } else {
  //     const addScore = totalScore[3].score + n;
  //     const newObject = { id: "JP", score: addScore };
  //     totalScore.splice(3, 1, newObject);
  //   }
  //   setQuestionNo(questionNo + 1);
  // };

  console.log(questionNo);
  console.log(QuestionData.length);
  return (
    <Wrapper>
      <ProgressBar
        striped
        variant="danger"
        now={(questionNo / QuestionData.length) * 100}
        style={{ marginTop: "20px" }}
      />
      <Title>{QuestionData[questionNo].title}</Title>
      <ButtonGroup>
        <StyledButton
          onClick={() => handleClickBtn(1, QuestionData[questionNo].type)}
          style={{ width: "40%", minHeight: "200px", fontSize: "15px" }}
        >
          {QuestionData[questionNo].answera}
        </StyledButton>
        <StyledButton
          onClick={() => handleClickBtn(0, QuestionData[questionNo].type)}
          style={{
            width: "40%",
            minHeight: "200px",
            fontSize: "15px",
            marginLeft: "20px",
          }}
        >
          {QuestionData[questionNo].answerb}
        </StyledButton>
      </ButtonGroup>
    </Wrapper>
  );
};

export default Question;
