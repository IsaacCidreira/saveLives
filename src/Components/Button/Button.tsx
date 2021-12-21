import { ReactNode } from 'react';
import { Buttons } from './style';

interface ButtonType {
  children: ReactNode;
}
const Button = ({ children, ...props }: ButtonType) => {
  return <Buttons {...props}>{children}</Buttons>;
};

export default Button;
