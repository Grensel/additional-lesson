import { MoneyType } from "./HW3";
import styled from "styled-components";

type CurrentBankomatPropsType = {
  money: MoneyType;
};

export const CurrentBankomat = ({ money }: CurrentBankomatPropsType) => {
  return (
    <div>
      <div>
        {money.banknote === "USD" ? (
          <BanknoteGreen>
            <Name>{money.banknote}</Name>
            <Nominal>{money.nominal}</Nominal>
          </BanknoteGreen>
        ) : (
          <BanknoteBlue>
            <Name>{money.banknote}</Name>
            <Nominal>{money.nominal}</Nominal>
          </BanknoteBlue>
        )}
      </div>
      <Banknote color={money.banknote === "USD" ? "aquamarine" : "lightskyblue"}>
        <Name>{money.banknote}</Name>
        <Nominal>{money.nominal}</Nominal>
      </Banknote>
    </div>
  );
};

const BanknoteGreen = styled.div`
  background-color: aquamarine;
  width: 200px;
  height: 100px;
  margin: 10px;
`;

const BanknoteBlue = styled.div`
  background-color: lightskyblue;
  width: 200px;
  height: 100px;
  margin: 10px;
`;
type BanknoteType = {
  color: "aquamarine" | "lightskyblue";
};
const Banknote = styled.div<BanknoteType>`
  background-color: ${props => props.color};
  width: 200px;
  height: 100px;
  margin: 5px;
`;

const Name = styled.span`
  display: flex;
  justify-content: center;
  font-size: 15px;
`;

const Nominal = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  font-size: 45px;
`;
