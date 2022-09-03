import "dotenv/config";
import express from "express";
import cors from "cors";
import corsOptions from "./utils/corsOption";
import config from "config";
import cookieParser from "cookie-parser";
import morganMiddleware from "./middleware/morganMiddleware";
import logger from "./utils/logger";
import router from "./routes";
import errorHandler from "./middleware/errorHandler";
import connectDb from "./utils/connectDb";

const app = express();

app.use(morganMiddleware);

app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser());

app.use(router);

app.use(errorHandler);

const port = config.get<number>("port");

app.listen(port, () => {
  logger.info(`Server started on port: ${port} 🚀`);
  connectDb();
});
