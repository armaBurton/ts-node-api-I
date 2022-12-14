/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { appendFile } from "fs";

dotenv.config();
/**
 * App Variables
 */
!process.env.PORT && process.exit(1);

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/", (req, res, next) => {
  res.send(`<h1>Boop</h1>`);
});

/**
 * Server Activation
 */
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
