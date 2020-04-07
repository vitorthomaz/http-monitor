import React, { useState, useEffect, useCallback } from "react";

import { get } from "../../services";

import { Container, Text, Display } from "./styles";

const timer = 5000;

const Card: React.FC<ICard> = ({ name, url }) => {
  const [status, setStatus] = useState(false);

  const request = useCallback(
    () =>
      get(url)
        .then((result) => {
          if (result.status === 200) setStatus(true);
        })
        .catch((err: Error) => {
          console.log(err);
          setStatus(false);
        }),
    [url]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      request();
    }, timer);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Container>
      <Text>{name}</Text>
      <Display status={status} />
    </Container>
  );
};

export default Card;

export interface ICard {
  name: string;
  url: string;
}

export interface IDisplay {
  status?: boolean;
}
