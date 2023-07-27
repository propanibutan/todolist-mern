import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";

import router from "./routes/login.js";

const app = express();
dotenv.config();

app.use(cors());
//to get addition feedback to endpoints
app.use(morgan("tiny"));
app.use(router);

app.listen(8800, () => {
  connect();
  console.log("Connected to backend");
});
