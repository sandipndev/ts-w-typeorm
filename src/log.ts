import winston from "winston";
import { NODE_ENV } from "./config";

const { format, transports } = winston;

const logger = winston.createLogger({
  format: format.errors({ stack: true }),
});

if (NODE_ENV !== "production") {
  logger.add(
    new transports.Console({
      format: format.cli(),
    })
  );
} else {
  logger.add(
    new transports.Console({
      format: format.json(),
      level: "debug",
    })
  );
}

export default logger;
