import { useState } from "react";
import "./App.css";
import { Button } from "./components/button/Button";
import { Container } from "./components/Styled/Container";
import { FlexWrapper } from "./components/Styled/FlexWrapper";
import { Title } from "./components/Styled/SectionTitle";
import { Task1 } from "./components/Tasks/Task1";
import { Task2 } from "./components/Tasks/Task2";
import { Task3 } from "./components/Tasks/Task3";

export const App = () => {
  const tasksArray = [Task1, Task2, Task3];
  const [index, setIndex] = useState(tasksArray.length - 1);
  const [visible, setVisible] = useState(tasksArray[index]);
  const firstTask = () => {
    setIndex(0);
    setVisible(tasksArray[0]);
  };
  const earlyTusk = () => {
    const earlyTuskIndex = index > 0 ? index - 1 : 0;
    setIndex(earlyTuskIndex);
    setVisible(tasksArray[earlyTuskIndex]);
  };
  const nextTusk = () => {
    const nextTuskIndex = index <= 0 ? index + 1 : tasksArray.length - 1;
    setIndex(nextTuskIndex);
    setVisible(tasksArray[nextTuskIndex]);
  };
  const lastTusk = () => {
    const lastIndex = tasksArray.length - 1;
    setIndex(lastIndex);
    setVisible(tasksArray[lastIndex]);
  };
  const closeTask = () => {
    setIndex(0);
    setVisible(<></>);
  };

  return (
    <>
      <Container>
        <FlexWrapper direction="column" gap={10} align="center">
          <Title>My Works</Title>
          <FlexWrapper gap={10}>
            <Button title={"First Task"} onClickHandler={firstTask} />
            <Button title={"<"} onClickHandler={earlyTusk} />
            <Button title={">"} onClickHandler={nextTusk} />
            <Button title={"Last Task"} onClickHandler={lastTusk} />
            <Button title={"Close"} onClickHandler={closeTask} />
          </FlexWrapper>
          {visible}
        </FlexWrapper>
      </Container>
    </>
  );
};
