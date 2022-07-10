import express from "express";
import { fetchApi } from "./helpers";

const router = express.Router();

router.get("/", async (req, res) => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetchApi({
    method: "GET",
    url,
  });

  res.send(response);
});

export default router;
