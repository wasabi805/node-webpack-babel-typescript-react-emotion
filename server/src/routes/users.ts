import express from "express";
const router = express.Router();
import axios, { AxiosResponse, AxiosPromise } from "axios";
// see https://stackoverflow.com/q/62217642/7857134

interface iUsers {
  id: number;
  name: string;
  occupation: string;
}

interface iFetchApi {
  method: string;
  url: string;
}

const fetchApi = ({ method, url }: iFetchApi): AxiosPromise => {
  return axios({
    method: method,
    url: url,
  });
};

const users: iUsers[] = [
  { id: 1, name: "Matt Murdock", occupation: "Lawyer" },
  { id: 2, name: "Jennifer Walters", occupation: "Attorney" },
  { id: 3, name: "Peter Parker", occupation: "Photographer" },
];

router.get("/", async (req, res) => {
  let url = "https://jsonplaceholder.typicode.com/users";

  const response: AxiosResponse = await fetchApi({ method: "GET", url });

  res.send(response.data);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const userId = parseInt(id, 10);

  const user = users.filter((user) => user.id === userId);

  res.send(user);
});

export default router;
