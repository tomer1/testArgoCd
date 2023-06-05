const https = require("https");

process.on("SIGTERM", () => {
  console.log("Received SIGTERM. Shutting down gracefully...");
  // Add any cleanup or graceful shutdown logic here

  https
    .get("https://www.google.com/", (response) => {
      response.on("data", () => {
        console.log("Finish http request");
        process.exit(0); // Optional: Explicitly exit the process with a success code or else K8s will force kill after 30s
      });
    })
    .on("error", (error) => {
      console.log("Finish http request");
    });
});

setInterval(() => {
  console.log("keep alive ! ! ! ");
}, 1000);
