import axios from "axios";

import { token } from "../config/token";

export const get = (url: string, options: Object = {}) => {
  return axios.get(url, options);
};

export const sms = (name: string) => {
  const url =
    "https://catchup.grupomateus.com.br:8094/api/gestor/apigestor/v1/enviar/sms";

  const data = {
    telefone: "98991170011",
    mensagem: `O serviço ${name} parece estar fora do ar.`
  };

  const options = {
    headers: {
      Authorization: `${token}`
    }
  };

  return axios.patch(url, data, options);
};
