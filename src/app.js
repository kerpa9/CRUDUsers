import express, { json } from "express";

import { router } from "./Users/routes/route.js";

const app = express();

app.use(express.json());

app.use("/api/v1", router);

app.get("/", (req, res) => {
  return res.send("App CRUD!");
});

export default app;
