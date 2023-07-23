import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { styled } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { ResultData } from "../assets/data/resultdata";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #dcdcdc;
  font-family: "Yeon Sung", cursive;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  background-color: #778899;
  color: #fff;
  font-size: 32px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px;
`;
const Title = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
`;
const LogoImage = styled.div`
  margin-top: 10px;
`;
const Desc = styled.div`
  margin: 40px 0;
  font-size: 24px;
  text-align: center;
`;
const Button = styled.button`
  background-color: #778899;
  border: none;
  padding: 10px 50px;
  font-size: 24px;
  color: #fff;
  border-radius: 5px;
  &:hover {
    background-color: #505b66;
  }
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
