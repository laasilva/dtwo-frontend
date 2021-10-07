import React from "react";
import { FiMail as email, FiKey as password } from "react-icons/fi";

import { Container, Content } from "./styled";

import Input from "../../components/input";
import Button from "../../components/button";

import { Modal } from '../../components/modal';

const Signin: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Content>
        <form>
          <h1>Faça seu login</h1>

          <Input
            icon={email}
            name="email"
            placeholder="email"
            autoComplete="false"
          />

          <Input
            icon={password}
            name="password"
            type="password"
            placeholder="senha"
          />

          <Button type="submit">Acessar</Button>

          <a href="forgot" onClick={handleOpen}>Esqueci minha senha</a>


        </form>
      </Content>
    </Container>
  );
};

export default Signin;