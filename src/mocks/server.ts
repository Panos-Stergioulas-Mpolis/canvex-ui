import { setupServer } from "msw/node";
import { handlers } from "./handlers";

const server = setupServer(...handlers);

server.events.on("request:start", ({ request }) => {
  console.log("Outgoing:", request.method, request.url);
});

server.events.on("request:unhandled", ({ request }) => {
  console.warn("Unhandled request:", request.method, request.url);
});

export default server;
