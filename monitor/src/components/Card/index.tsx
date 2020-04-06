import React, { useState, useCallback, useEffect } from "react";
import io from "socket.io-client";

import { Container, Text, Display } from "./styles";

const Card: React.FC<ICard> = ({ name, url }) => {
  const [status, setStatus] = useState(false);

  const socket = useCallback(() => {
    const socket = io.connect(url);

    socket.on("connect", () => {
      console.log("Connected to " + url);
      setStatus(true);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from " + url);

      setStatus(false);
    });
  }, [url]);

  useEffect(() => {
    socket();
  }, [socket]);

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
