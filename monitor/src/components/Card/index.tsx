import React, { useState, useEffect, useCallback } from "react";

import { get } from "../../services";

import { Container, Text, Display } from "./styles";

const seconds = 30;

const Card: React.FC<ICard> = ({ name, url, options }) => {
  const [status, setStatus] = useState(false);

  const request = useCallback(
    () =>
      get(url, options)
        .then((result) => {
          if (result.status === 200) setStatus(true);
        })
        .catch((err: Error) => {
          console.log(err);
          setStatus(false);
        }),
    [url, options]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      request();
    }, seconds * 100);

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
  options?: Object;
}

export interface IDisplay {
  status?: boolean;
}
