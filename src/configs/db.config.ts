import config from "config";
import mongoose from "mongoose";
import {logger} from "@/logger";
import {formatPlugin} from "./plugins";

// initialize plugins
mongoose.plugin(formatPlugin);

// connect database
export const connectDB = async () => {
  const url = config.get<string>("db.url");
  // connection start
  try {
    const instance = await mongoose.connect(url, {
      autoIndex: true,
      dbName: config.get<string>("db.name"),
    });
    // log on console
    logger.info("Database connected");
    // on exit to close mongodb server
    process.on("SIGTERM", () => {
      instance.connection.close();
      process.exit(1);
    });
  } catch (error) {
    // handle error
    logger.error(error);
    process.exit(1);
  }
};
