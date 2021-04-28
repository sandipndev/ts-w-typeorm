import "reflect-metadata";

import app from "./server";

import { APP_PORT } from "./config";
import init from "./utils/init";
import log from "./log";

async function main() {
  log.info("Booting Server Up 🔥");

  // initialize
  await init();

  log.info("Server Ready and Initialized ⚡");

  // listen to all ips, because of vhosts
  app.listen(APP_PORT, "0.0.0.0", () => {
    log.info(`🚀 Server online on port ${APP_PORT}`);
  });
}

main().catch(log.error);
