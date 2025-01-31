import { ButtonHTMLAttributes } from "react";
import s from "./Button.module.css";
// type ButtonPropsType = {
//   onClick: () => void;
//   children: React.ReactNode;
//   color?: string;

type ColorsProps = {
  color1?: string;
  color2?: string;
  color3?: string;
  color4?: string;
  color5?: string;
};

type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: string;
  disabled?: boolean;
} & Omit<ColorsProps, "color4" | "color5">;

export const Button = (props: ButtonPropsType) => {
  const { onClick, children, color, disabled /*className*/ /*...restProps*/ } =
    props;

  // const finalClassName =
  //   s.button +
  //   (disabled
  //     ? " " + s.disabled
  //     : color === "red"
  //     ? " " + s.red
  //     : color === "seccondary"
  //     ? " " + s.seccondary
  //     : " " + s.default) +
  //   (className ? " " + className : "");

  const finalClassName = `
  ${s.button}
  ${color === "red" ? s.red : color === "seccondary" ? s.seccondary : s.default}
  ${disabled ? s.disabled : ""}
  `;

  return (
    <button
      onClick={onClick}
      className={finalClassName /*className*/ /*...restProps*/}
    >
      {children}
    </button>
  );
};
