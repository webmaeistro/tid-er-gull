import React, { useContext, memo } from "react";
import { TextInputField, Button } from "evergreen-ui";
import { navigate } from "@reach/router";
import { Context } from "./appContext";
import { SET_PARTICIPANTS } from "./actionTypes";

const Participants = () => {
  const { state, dispatch } = useContext(Context);
  return (
    <>
      <TextInputField
        label="antall møte deltagere"
        hint="Type the number of participants in the meeting"
        onChange={e =>
          dispatch({ type: SET_PARTICIPANTS, participants: e.target.value })
        }
        value={state.participants}
        type="number"
        min={state.minParticipants}
        max={state.maxParticipants}
        marginBottom={16}
      />
      <Button
        onClick={() => navigate("/salaries")}
        to="/salaries"
        appearance="primary"
        iconAfter="arrow-right"
      >
        Videre
      </Button>
    </>
  );
};

export default memo(Participants);
