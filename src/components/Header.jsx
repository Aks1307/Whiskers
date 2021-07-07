import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

function Header() {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.modalState.login);
  const signUp = useSelector((state) => state.modalState);



  return (
    <HeaderComponent>
      <Navbar className="navbar-custom" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/images/logo.svg"
              width="90"
              height="60"
              className="d-inline-block align-top"
              alt="Whiskers"
            />
          </Navbar.Brand>

          <Nav className="me-auto nav-links">
            <Nav.Link href="#home">Booking</Nav.Link>
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link href="#pricing">How it Works</Nav.Link>
          </Nav>
          <div className="button">
            <ButtonLog
              onClick={() =>
                dispatch({ type: "LOG_IN_MODAL", payload: !login })
              }
            >
              Log In
            </ButtonLog>
            <ButtonSign
              onClick={() =>
                dispatch({ type: "SIGN_UP_MODAL", payload: !signUp })
              }
            >
              Sign Up
            </ButtonSign>
          </div>
        </Container>
      </Navbar>
    </HeaderComponent>
  );
}

export default Header;

const HeaderComponent = styled.div`
  .nav-links a {
    color: #e5edeb !important;
    padding: 0 15px !important;
  }
  .button {
    display: flex;
    justify-content: space-between;
    width: 200px;
  }
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  .navbar-custom {
    background-color: #208cb2 !important;
  }
  width: 100%;
`;
const ButtonLog = styled.button`
  background: none;
  border: 2px solid #febd57;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 10px;
`;
const ButtonSign = styled.button`
  box-sizing: border-box;
  background: #febd57;
  border-radius: 6px;
  border: none;
  padding: 10px;
`;
