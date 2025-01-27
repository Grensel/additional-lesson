import { S } from "./Button_Styles";

type ButtonPropsType = {
  title: string;
  onClickHandler?: () => void;
  disabled?: boolean;
};

export const Button = ({
  title,
  onClickHandler,
  disabled,
}: ButtonPropsType) => {
  return (
    <S.Button disabled={disabled} onClick={onClickHandler}>
      {title}
    </S.Button>
  );
};
