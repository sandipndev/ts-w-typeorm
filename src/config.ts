/* Application level configuration objects to be exported
 * from here
 */

import dotenv from "dotenv";
dotenv.config();

export const {
  // App
  NODE_ENV = "development",
  FRONTEND_LOCATION = "https://example.com",

  // Cookie Settings
  JWT_SIGNKEY = "jwt-sign-key",
  JWT_EXPIRESIN = "10m",

  // AWS
  AWS_ACCESS_KEY = "",
  AWS_SECRET_ACCESS_KEY = "",
  AWS_BUCKET_NAME = "",
  AWS_BUCKET_REGION = "ap-south-1",

  // Postgres Database
  DATABASE_TYPE = "postgres",
  DATABASE_HOST = "localhost",
  DATABASE_PORT = 5432,
  DATABASE_USERNAME = "postgres",
  DATABASE_PASSWORD = "",
  DATABASE_NAME = "database",
} = process.env;

export const APP_PORT = parseInt(process.env.APP_PORT || "4000");
export const INCLUDE_CREDENTIALS = process.env.INCLUDE_CREDENTIALS === "true";
