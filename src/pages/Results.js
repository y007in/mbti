import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { styled } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import PangImage from "../assets/ggompang.jpeg";
import { ResultData } from "../assets/data/resultdata";
import Button from "react-bootstrap/Button";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  font-family: "Yeon Sung", cursive;
`;
const Header = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  font-size: 30px;
  margin-top: 40px;
`;
const LogoImage = styled.div`
  margin-top: 10px;
`;
const Desc = styled.div`
  font-size: 20px;
  margin-top: 20px;
`;

const Results = () => {
  const navigate = useNavigate();
  const handleClickBtn = () => {
    navigate("/");
  };
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  console.log(mbti);
  const [resultData, setResultData] = useState([]);
  useEffect(() => {
    const result = ResultData.find((r) => r.best === mbti);
    setResultData(result);
  }, [mbti]);

  return (
    <Wrapper>
      <Header>예비집사 판별기😻</Header>
      <Content>
        <Title>결과보기</Title>
        <LogoImage>
          <img
            className="rounded-circle" //bootstrap
            src={resultData.image}
            width={350}
            height={350}
          />
        </LogoImage>
        <Desc>
          예비집사님과 찰떡궁합인 고양이는 {resultData.best}형 {resultData.name}
          입니다.
        </Desc>
        <Desc>{resultData.desc}</Desc>
        <Button onClick={handleClickBtn}>테스트 다시하기</Button>
      </Content>
    </Wrapper>
  );
};

export default Results;
