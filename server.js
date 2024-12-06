const http = require("http");

const users = [
  {
    id: 1,
    name: "levani",
    age: 26,
  },
  {
    id: 2,
    name: "lasha",
    age: 22,
  },
];

const server = http.createServer((req, res) => {
  console.log(req.url, "url");
  console.log(req.method, "method");
  if (req.url === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>This is Homepage </h1>");

    res.end();
  } else if (req.url === "/users") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(users));
    res.end();
  }
});

server.listen(3500, () => {
  console.log("server running on http://localhost:3500");
});
