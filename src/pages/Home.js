import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import PangImage from "../assets/ggompang.jpeg";

const Wrapper = styled.div`
  width: 70%;
  padding-bottom: 50px;
  background-color: #dcdcdc;
  font-family: "Yeon Sung", cursive;
`;
const Header = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #778899;
  color: #fff;
  padding: 10px 0;
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
  margin: 20px 0;
  font-size: 24px;
`;
const StyledButton = styled(Button)`
  background-color: #778899;
  border: none;
  padding: 10px 50px;
  font-size: 24px;
`;
const Home = () => {
  const navigate = useNavigate();
  const handleClickBtn = () => {
    navigate("/question");
  };
  return (
    <Wrapper>
      <Header>예비집사 판별기😻</Header>
      <Content>
        <Title>나에게 맞는 주인님은??</Title>
        <LogoImage>
          <img
            className="rounded-circle" //bootstrap
            src={PangImage}
            width={350}
            height={350}
          />
        </LogoImage>
        <Desc>MBTI를 기반으로 하는 나랑 잘 맞는 고양이 찾기</Desc>
        <StyledButton onClick={handleClickBtn}>테스트 시작하기</StyledButton>
      </Content>
    </Wrapper>
  );
};

export default Home;
