// Retirado de: https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjzyKu-h-3-AhW7rpUCHYJ1A4cQFnoECAsQAQ&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fts-node-dev&usg=AOvVaw0u7bTbePDVW4OBCIaM1_uU
import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleRequestError } from "./middlewares/handleRequestError";

import { router } from "./routes";
import "./database";

const app = express();

app.use(express.json());

app.use(router);

app.use(handleRequestError);

export { app }