import { Express as express } from "express";
import { app } from "./src/index";

const API_URL = process.env.API_URL || "http://localhost";
const PORT = process.env.PORT || 7890;

app.listen(PORT);
