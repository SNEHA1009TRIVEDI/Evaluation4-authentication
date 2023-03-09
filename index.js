require("dotenv").config();
const express = require("express");
const routes = require("./src/routers/routers");
const app = express();
const port = 3000;

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}/`)
);
