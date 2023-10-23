import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import homeimage from "../assets/homeimage.jpeg";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #dcdcdc;
  font-family: "Yeon Sung", cursive;
  padding-bottom: 70px;
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 70px;
`;
const Title = styled.div`
  font-size: 48px;
  margin-bottom: 30px;
`;
const LogoImage = styled.div`
  margin: 80px 0;
`;
const Button = styled.button`
  background-color: #778899;
  border: none;
  padding: 10px 50px;
  margin: 40px 0;
  font-size: 32px;
  color: #fff;
  border-radius: 5px;
  &:hover {
    background-color: #505b66;
  }
`;
const Home = () => {
  const navigate = useNavigate();
  const handleClickBtn = () => {
    navigate("/question");
  };
  return (
    <Wrapper>
      <Header>💡 MBTI TEST 💡</Header>
      <Content>
        <Title>당신의 MBTI는???</Title>
        <LogoImage>
          <img
            className="rounded-circle" //bootstrap
            src={homeimage}
            width={500}
            height={500}
          />
        </LogoImage>
        <Button onClick={handleClickBtn}>테스트 시작하기</Button>
      </Content>
    </Wrapper>
  );
};

export default Home;
