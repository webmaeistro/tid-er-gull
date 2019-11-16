import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Spinner, Heading } from "evergreen-ui";
import { createGlobalStyle } from "styled-components";
import { Router } from "@reach/router";
import { AppContainer } from "./styled";
import { ContextProvider } from "./appContext";

// code splitting
const Participants = lazy(() => import("./Participants"));
const Salaries = lazy(() => import("./Salaries"));
const Meeting = lazy(() => import("./Meeting"));

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Pacifico');
  h1 {
    font-family: 'Pacifico', cursive;
  }
  body {
    background-color: #F9F9FB;
  }
`;

function App() {
  return (
    <AppContainer>
      <h1
        style={{
          color: "#425A70"
        }}
      >
        Tid er{" "}
        <span
          style={{
            color: "#F7D154"
          }}
        >
          gull
        </span>{" "}
        <span role="img" aria-label="money">
          💸
        </span>
      </h1>
      <Heading size={100} marginBottom={25}>
        Hvor mye et møte kan koste.
      </Heading>
      <ContextProvider>
        <Suspense fallback={<Spinner size={16} />}>
          <Router>
            <Participants path="/" />
            <Salaries path="/salaries" />
            <Meeting path="/meeting" />
          </Router>
        </Suspense>
        <GlobalStyles />
      </ContextProvider>
    </AppContainer>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
