import React, { useContext, memo } from "react";
import { TextInputField, Button, toaster, Text } from "evergreen-ui";
import { navigate } from "@reach/router";
import { Context } from "./appContext";
import { SET_SALARY } from "./actionTypes";
import { Spacer } from "./styled";

const Salaries = () => {
  const { state, dispatch } = useContext(Context);
  const enterMeeting = () => {
    const hasZeros = state.salaries.findIndex(salary => salary === 0) !== -1;
    if (hasZeros) {
      return toaster.danger("Please fill in all salaries.", { id: "danger" });
    }
    navigate("/meeting");
  };
  const handleSalaryChange = (e, key) => {
    return dispatch({
      type: SET_SALARY,
      key,
      salary: +e.target.value
    });
  };
  return (
    <React.Fragment>
      <Text color="muted" size={300} intent="warning">
        Skriv inn årslønnen til de individuelle deltakerene.
      </Text>
      <Spacer />
      {[...Array(state.participants)].map((_, key) => (
        <TextInputField
          label={`Årslønn ${key + 1}`}
          placeholder="123456..."
          key={key}
          type="number"
          min={0}
          value={state.salaries[key] || 0}
          marginBottom={8}
          onChange={e => handleSalaryChange(e, key)}
        />
      ))}
      <Button onClick={() => navigate("/")} iconBefore="arrow-left">
        Tilbake
      </Button>
      &nbsp;
      <Button
        onClick={enterMeeting}
        appearance="primary"
        iconAfter="arrow-right"
      >
        Videre
      </Button>
    </React.Fragment>
  );
};

export default memo(Salaries);
