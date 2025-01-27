import styled, { css } from "styled-components";
import { thems } from "../../styles/Thems";
import { font } from "../../styles/Common";

type TitleComponentType = {
  color?: "second";
};
export const Title = styled.h2<TitleComponentType>`
  color: ${thems.colors.text.title};
  margin-bottom: 20px;

  ${(props) =>
    props.color === "second" &&
    css<TitleComponentType>`
      ${font({
        weight: 900,
        color: thems.colors.text.additional,
        Fmin: 46,
        Fmax: 100,
      })}
    `}
`;
