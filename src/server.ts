import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import { FRONTEND_LOCATION, INCLUDE_CREDENTIALS } from "./config";

const app = express();

app.disable("x-powered-by");
app.disable("etag");

app.use(cookieParser());

app.use(
  cors({
    origin: FRONTEND_LOCATION,
    credentials: INCLUDE_CREDENTIALS,
  })
);

export default app;
