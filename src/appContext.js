import React, { createContext, useReducer } from "react";
import * as types from "./actionTypes";

const MAX_PARTICIPANTS = 40;
const MIN_PARTICIPANTS = 2;

const initialState = {
  minParticipants: MIN_PARTICIPANTS,
  maxParticipants: MAX_PARTICIPANTS,
  participants: 3,
  currencies: ["kr"],
  salaries: [],
  realtime: true
};

let reducer = (state, action) => {
  switch (action.type) {
    case types.SET_PARTICIPANTS: {
      const participants =
        action.participants > MAX_PARTICIPANTS
          ? MAX_PARTICIPANTS
          : +action.participants < MIN_PARTICIPANTS
          ? MIN_PARTICIPANTS
          : +action.participants;
      return Object.assign({}, state, {
        participants,
        salaries: state.salaries.slice(0, participants)
      });
    }
    case types.SET_SALARY: {
      const salaries = state.salaries;
      salaries[action.key] = action.salary;
      return Object.assign({}, state, {
        salaries
      });
    }
    case types.SET_REALTIME:
      return Object.assign({}, state, { realtime: action.realtime });
    default:
      return state;
  }
};

const Context = createContext();

function ContextProvider(props) {
  let [state, dispatch] = useReducer(reducer, initialState);
  let value = { state, dispatch };
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}

let ContextConsumer = Context.Consumer;

export { Context, ContextProvider, ContextConsumer };
