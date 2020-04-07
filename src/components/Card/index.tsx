import React, { useState, useEffect, useCallback } from "react";

import { get, sms } from "../../services";

import { Container, Text, Display } from "./styles";

const seconds = 10;

const Card: React.FC<ICard> = ({ name, url, options }) => {
  const [status, setStatus] = useState(false);

  const sendSms = useCallback(
    service =>
      sms(service)
        .then(() => {})
        .catch(err => console.log(err)),
    []
  );

  const request = useCallback(
    () =>
      get(url, options)
        .then(result => {
          if (result.status === 200) setStatus(true);
        })
        .catch((err: Error) => {
          console.log(err);
          sendSms(name);

          setStatus(false);
        }),
    [url, options, name, sendSms]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      request();
    }, seconds * 1000);

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
