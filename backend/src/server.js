import "dotenv/config";

import app from "./app.js";

const PORT = process.env.PORT || 5000;

let server;

const startServer = async () => {
  server = app.listen(PORT, () => {
    console.log(`EcoStay AI backend running on port ${PORT}`);
  });
};

const shutdown = async (signal) => {
  console.log(`${signal} received. Shutting down gracefully...`);

  if (server) {
    server.close(() => {
      console.log("Server closed.");
      process.exit(0);
    });
    return;
  }

  process.exit(0);
};

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));

process.on("unhandledRejection", (error) => {
  console.error(`Unhandled rejection: ${error.message}`);
  shutdown("UNHANDLED_REJECTION");
});

startServer().catch((error) => {
  console.error(`Failed to start server: ${error.message}`);
  process.exit(1);
});
