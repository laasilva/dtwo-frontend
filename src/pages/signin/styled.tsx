import styled from "styled-components";
import { purple, purpleHover } from "../../utils/colors";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
      color: #fff;
    }
    button {
      background: ${purple};
      border-radius: 10px;
      border: none;
      padding: 0 16px;
      width: 100%;
      height: 56px;
      color: #312e38;
      margin-top: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${purpleHover};
      }
    }
    a {
      color:  ${purple};
      text-decoration: none;
      margin-top: 24px;
      display: block;
      transition: color 0.2s;
      &:hover {
        color: ${purpleHover};
      }
    }
  }
  > a {
    display: flex;
    align-items: center;
    color: ${purpleHover};
    text-decoration: none;
  }
`;