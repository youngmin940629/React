import React from 'react';
import styled from '@emotion/styled';
import FacebookLogin, { ReactFacebookFailureResponse, ReactFacebookLoginInfo } from 'react-facebook-login';
import { useRecoilState } from 'recoil';

import Modal from '../../components/Modal';
import { loginModalOpenState, signupModalOpenState } from './atom';

const Container = styled.div`
  width: 375px;
  min-height: 540px;
  height: auto;
  border-radius: 6px;
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  padding: 32px 20px 48px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Logo = styled.img``;

const TitleWrapper = styled.div`
  margin: 24px 0 20px;
`;

const Title = styled.h4`
  font-size: 17px;
  font-weight: 700;
  text-align: center;
  margin: 0;
  padding: 0;
`;

const Section = styled.section``;

const Form = styled.form``;

const InputWrapper = styled.div`
  padding: 4px 0;
  overflow: hidden;
`;

const InputLabel = styled.label`
  display: flex;
  align-items: center;
  background-color: rgb(245, 245, 245);
  width: 100%;
  box-sizing: border-box;
  height: 44px;
  padding: 0 12px;
  border-radius: 6px;
`;

const Input = styled.input`
  background: transparent;
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  padding: 0;
  border: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  caret-color: rgb(255, 47, 110);
`;

const SubmitButton = styled.button`
  padding: 0;
  border: none;
  cursor: pointer;
  background: rgb(255, 47, 110);
  color: rgb(255, 255, 255);
  text-align: center;
  font-size: 17px;
  font-weight: 400;
  width: 100%;
  height: 44px;
  border-radius: 6px;
  margin-top: 16px;
`;

const FindPasswordWrapper = styled.div`
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  margin: 20px 0 14px;
`;

const FindPassword = styled.button`
  background: none;
  padding: 0;
  border: none;
  margin: 0;
  cursor: pointer;
  color: rgb(255, 47, 110);
  font-size: inherit;
`;

const FindAccountWrapper = styled.div`
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  color: rgb(140, 140, 140);
`;

const FindAccount = styled.button`
  background: none;
  padding: 0;
  border: none;
  margin: 0;
  cursor: pointer;
  color: rgb(255, 47, 110);
  font-size: inherit;
`;

const Divider = styled.hr`
  position: relative;
  color: black;
  text-align: center;
  height: 1.5em;
  border: 0;
  outline: 0;
  margin: 24px 0;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    border-top: 1px solid rgb(216, 216, 216);
  }
  &:after {
    content: "OR";
    display: inline-block;
    position: relative;
    top: -2px;
    background-color: rgb(255, 255, 255);
    color: rgb(160, 160, 160);
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.3px;
    line-height: 19px;
    vertical-align: middle;
    padding: 5px 14px;
  }
`;

const FacebookLoginWrapper = styled.div`
  width: 100%;
`;

interface Props {}

const LoginModal: React.FC<Props> = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useRecoilState(loginModalOpenState);
  const [isSignupModalOpen, setIsSignupModalOpen] = useRecoilState(signupModalOpenState);

  const responseFacebook = (userInfo: ReactFacebookLoginInfo | ReactFacebookFailureResponse) => {
    console.log(userInfo);
  }

  const handleClose =  (): void => {
    setIsLoginModalOpen(false);
  }

  const handleSignup = (): void => {
    handleClose();
    !isSignupModalOpen && setIsSignupModalOpen(true);
  }

  return (
    <Modal isOpen={isLoginModalOpen} onClose={handleClose}>
      <Container>
        <ContentWrapper>
          <LogoWrapper>
            <Logo src="/logo.png" />
          </LogoWrapper>
          <TitleWrapper>
            <Title>로그인</Title>
          </TitleWrapper>
          <Section>
            <Form>
              <InputWrapper>
                <InputLabel>
                  <Input placeholder="이메일" />
                </InputLabel>
              </InputWrapper>
              <InputWrapper>
                <InputLabel>
                  <Input placeholder="비밀번호" />
                </InputLabel>
              </InputWrapper>
              <SubmitButton>
                로그인
              </SubmitButton>
            </Form>
            <FindPasswordWrapper>
              <FindPassword>비밀번호를 잊어버리셨나요?</FindPassword>
            </FindPasswordWrapper>
            <FindAccountWrapper>
              계정이 없으신가요 ? <FindAccount onClick={handleSignup}>회원가입</FindAccount>
            </FindAccountWrapper>
            <Divider />
            <FacebookLoginWrapper>
              <FacebookLogin
                cssClass="my-facebook-button-class"
                autoLoad
                appId={''}
                fields="name,email,picture"
                callback={responseFacebook}
                icon="fa-facebook"
                textButton="Facebook 으로 로그인"
              />
            </FacebookLoginWrapper>
          </Section>
        </ContentWrapper>
      </Container>
    </Modal>
  )
}

export default LoginModal;
