const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200, { contentType: "text/html" });
  res.write("<h1>Checking https server</h1>");
  res.end();
});
server.listen(3000, () => {
  console.log("Server is running on port 3000 https://localhost:3000");
});
