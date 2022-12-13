/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();
/**
 * App Variables
 */
!process.env.PORT && process.exit(1);

const PORT: number = parseInt(process.env.PORT as string, 10);

/**
 *  App Configuration
 */

/**
 * Server Activation
 */
