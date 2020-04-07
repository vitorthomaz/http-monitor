import React from "react";
import styled from "styled-components";

import Card, { ICard } from "./components/Card";

import apis from "./config";

function App() {
  return (
    <Container>
      <Title>MONITOR</Title>
      <Services>
        {apis.map((elem: ICard, i: number) => (
          <Card
            key={i}
            name={elem.name}
            url={elem.url}
            options={elem.options}
          ></Card>
        ))}
      </Services>
    </Container>
  );
}

const Title = styled.span`
  display: flex;
  flex-direction: row;

  font-size: 32px;
  color: ${props => props.theme.color.text.white};
`;

const Container = styled.div`
  padding: 30px;

  width: 30%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${props => props.theme.background.secondary};

  border: 1px solid black;
  border-radius: 6px;
`;

const Services = styled.div`
  padding: 20px 0 0 0;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export default App;
