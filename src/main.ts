import "dotenv/config";
import "reflect-metadata";
// start
import App from "./app";
import config from "config";
import {logger} from "./logger";

async function main() {
  const app = await App();
  // get port and host from config
  const port = config.get<number>("app.port");
  const host = config.get<string>("app.host");
  // server start
  app.listen(port, host, () =>
    logger.info(`Server Listening on http://${host}:${port}`)
  );
}

main();
