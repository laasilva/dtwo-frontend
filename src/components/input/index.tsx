import React, { InputHTMLAttributes } from "react";
import { IconBaseProps  } from "react-icons";

import { Container } from './styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  return (
    <Container>
      {Icon && <Icon size={23} color="#fff" />}
      <input {...rest} />
    </Container>
  );
};

export default Input;