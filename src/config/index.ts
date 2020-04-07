import { ICard } from "../components/Card";

const token =
  "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwMDA5NzEyMDM4MyIsImV4cCI6MTU4NjI0MjI0MH0.gapnyglThpDQkM2fMVJV_frCWj5J4wuXuXwvcUkUXnz7g97gGg41slS7iIwGYhg5MzVXdvotxnI4iHSPxTPmnA";

const defaultOptions = {
  headers: {
    Authorization: token,
    "Content-Type": "application/json"
  }
};

const apis: ICard[] = [
  {
    name: "Recrutameto",
    url:
      "https://catchup.grupomateus.com.br:8094/api/gestor/apigestor/v1/recrutamentos",
    options: defaultOptions
  },
  {
    name: "Consulta de Produto",
    url: "https://catchup.grupomateus.com.br:8094/api/catchup/v2/produto/5",
    options: {
      headers: {
        Authorization: token,
        "Content-Type": "application/json"
      },
      params: {
        id_filial: 7
      }
    }
  },
  {
    name: "Separação",
    url:
      "https://catchup.grupomateus.com.br:8094/catchup/api/catchup-rest-gateway/catchup-rest-ecommerce/v1/pedido/7",
    options: defaultOptions
  }
];

export default apis;
