import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { QuestionData } from "../assets/data/questiondata";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #dcdcdc;
  font-family: "Yeon Sung", cursive;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  font-size: 40px;
  margin-top: 100px;
`;
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 30px;
`;
const Button = styled.button`
  background-color: #778899;
  border: none;
  padding: 30px;
  font-size: 28px;
  color: #fff;
  letter-spacing: 2px;
  border-radius: 5px;
  width: 100%;
  min-height: 300px;
  word-break: keep-all;
  &:hover {
    background-color: #505b66;
  }
`;
const ButtonHome = styled.button`
  border: none;
  background-color: #fff;
  padding: 10px 50px;
  border-radius: 5px;
  margin: 100px 0;
  font-size: 24px;
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

  const Count = () => {
    return questionNo;
  };
  return (
    <Wrapper>
      <progress value={Count()} max="12"></progress>
      <Content>
        <Title>{QuestionData[questionNo].title}</Title>
        <ButtonGroup>
          <Button
            onClick={() => handleClickBtn(1, QuestionData[questionNo].type)}
          >
            {QuestionData[questionNo].answera}
          </Button>
          <Button
            onClick={() => handleClickBtn(0, QuestionData[questionNo].type)}
          >
            {QuestionData[questionNo].answerb}
          </Button>
        </ButtonGroup>
        <ButtonHome onClick={() => navigate("/")}>처음으로</ButtonHome>
      </Content>
    </Wrapper>
  );
};

export default Question;
