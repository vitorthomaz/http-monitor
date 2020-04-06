import styled, { css } from "styled-components";

import { IDisplay } from "./index";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin: 8px;
  padding: 5px;

  border: 1px solid black;
  border-radius: 6px;

  background: ${(props) => props.theme.background.terciary};
`;

export const Text = styled.span`
  margin: 10px;

  font-size: 20px;
  color: ${(props) => props.theme.color.text.black};
`;

export const Display = styled.div<IDisplay>`
  margin: 3px;

  border: 1px solid black;
  width: 20px;
  height: 20px;
  border-radius: 50%;

  background: red;

  ${(props) =>
    props.status &&
    css`
      background: green;
    `}
`;
