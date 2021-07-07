import React from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Logo from "./Logo";

function Login() {
  return (
    <SignBox>
      <Imgdiv>
        <SignImg src="/images/login.png" />
      </Imgdiv>
      <SignInputBox>
        {/* <div style={{textAlign:'center'}}> <Logo height={'20px'} width={'50px'}/></div> */}

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </SignInputBox>
    </SignBox>
  );
}

export default Login;

const SignBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`;
const SignImg = styled.img`
  width: 100%;
  object-fit: cover;
`;
const SignInputBox = styled.div`
  width: 50%;
  padding: 10px;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
const Imgdiv = styled.div`
  width: 50%;
  padding: 10px;
  @media (max-width: 700px) {
    width: 0;
  }
`;
