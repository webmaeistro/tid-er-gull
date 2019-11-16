import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Spacer = styled.div`
  height: 20px;
`;

export const CostText = styled.div`
  color: #234361;
  font-size: 25px;
  text-align: center;
  margin-bottom: 10px;
  font-family: "SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
`;

export const TimeText = styled.div`
  color: #425a70;
  font-size: 14px;
  text-align: center;
  font-family: "SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
`;

export const HomeActionContainerCTA = styled.div`
  text-align: center;
`;
