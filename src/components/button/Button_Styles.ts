import styled from "styled-components";
import { thems } from "../../styles/Thems";
import { font } from "../../styles/Common";

const Button = styled.button`
  padding: 5px 10px;
  background-color: ${thems.colors.background.additional};
  border: 1px solid ${thems.colors.background.button};
  border-radius: 5px;
  ${font({})}
  &:hover {
    background-color: ${thems.colors.background.second};
  }
`;

export const S = {
  Button,
};
