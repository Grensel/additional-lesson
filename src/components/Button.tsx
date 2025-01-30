import { ButtonHTMLAttributes } from "react";

type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ onClick, title }: ButtonPropsType) => {
  return <button onClick={onClick}>{title}</button>;
};
