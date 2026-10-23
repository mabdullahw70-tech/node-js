//* simple server using http
// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("<h1> this is my Home</h1>");
//     res.end();
//   } else if (req.url === "/about") {
//     res.writeHead(200, { "content-Type": "text/html" });
//     res.write("<h1>About my details are all here</h1>");
//     res.end();
//   } else {
//     res.writeHead(404, { "content-Type": "text/html" });
//     res.write("<h1>Page Not Found</h1>");

//     res.end();
//   }
// });
// server.listen(3000, () => {
//   console.log("server is running on port 3000 http://localhost:3000");
// });
// ! here is api creation or testing on http server
const http = require("http");

const userdata = [
  {
    id: 1,
    name: "Abdullah Waheed",
    email: "abdullahwaheed@example.com",
    age: 21,
  },
  {
    id: 2,
    name: "Shoaib Nawaz",
    email: "shoaibnawaz@example.com",
    age: 25,
  },
  {
    id: 3,
    name: "Uzair Afzal",
    email: "uzairafzal@example.com",
    age: 21,
  }
];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify(userdata));
  res.end();
}).listen(3000)

