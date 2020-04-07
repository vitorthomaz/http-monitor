import { ICard } from "../components/Card";

const token =
  "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwMDA5NzEyMDM4MyIsImV4cCI6MTU4NjI0MjI0MH0.gapnyglThpDQkM2fMVJV_frCWj5J4wuXuXwvcUkUXnz7g97gGg41slS7iIwGYhg5MzVXdvotxnI4iHSPxTPmnA";

const apis: ICard[] = [
  {
    name: "Firsto API",
    url: "http://localhost:4001/home",
  },
  {
    name: "Secondo API",
    url: "http://localhost:4002/home",
  },
  {
    name: "Recrutameto",
    url:
      "https://catchup.grupomateus.com.br:8094/api/gestor/apigestor/v1/recrutamentos",
    options: {
      headers: {
        Authorization: token,
      },
    },
  },
];

export default apis;
