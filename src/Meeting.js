import React, { memo, useContext } from "react";
import { Button, InlineAlert } from "evergreen-ui";
import { navigate } from "@reach/router";
import { Context } from "./appContext";
import useTimer from "./hooks/useTimer";
import { Spacer, CostText, TimeText, HomeActionContainerCTA } from "./styled";

const Meeting = () => {
  const { state } = useContext(Context);
  const {
    seconds,
    minutes,
    hours,
    counting,
    startTimer,
    stopTimer,
    resetTimer
  } = useTimer({ autoStart: false });
  const clock = () => (
    <>
      {`${String(hours).padStart(2, 0)}:${String(minutes).padStart(
        2,
        0
      )}:${String(seconds).padStart(2, 0)}`}
    </>
  );
  const cost = () => {
    const secondsInYear = 7.5 * 5 * 52.1429 * 60 * 60;
    const totalSalaries = state.salaries.reduce((acc, val) => {
      acc += val;
      return acc;
    }, 0);
    return parseFloat(
      (totalSalaries / secondsInYear) * (hours * 3600 + minutes * 60 + seconds)
    ).toFixed(2);
  };
  const invalidSalaries = state.salaries.findIndex(salary => salary === 0);
  if (invalidSalaries !== -1) {
    return (
      <>
        <InlineAlert intent="danger">Invalid salaries please</InlineAlert>
        <HomeActionContainerCTA>
          <Button iconBefore="home" onClick={() => navigate("/")}>
            Start pånytt
          </Button>
        </HomeActionContainerCTA>
      </>
    );
  }
  return (
    <>
      <CostText>${cost()}</CostText>
      <TimeText>{clock()}</TimeText>
      <Spacer />
      <Button
        appearance="primary"
        onClick={counting ? stopTimer : startTimer}
        iconBefore={counting ? "stop" : "play"}
        intent={counting ? "danger" : "none"}
      >
        {counting ? "Stop" : "Start"}
      </Button>
      &nbsp;
      <Button onClick={resetTimer} iconBefore="refresh">
        Omstart
      </Button>
      <Spacer />
      <HomeActionContainerCTA>
        <Button iconBefore="home" onClick={() => navigate("/")}>
          Start pånytt
        </Button>
      </HomeActionContainerCTA>
    </>
  );
};

export default memo(Meeting);
