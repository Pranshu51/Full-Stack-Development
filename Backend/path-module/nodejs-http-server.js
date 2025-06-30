const http = require('http');
const PORT = 3020;
const Hostname = 'localhost';

// const server= http.createServer((req, res) => {
//   res.statusCode=200;
//   res.setHeader('Content-Type', 'text/plain');

//   res.end('Hello World from Node.js HTTP Server!');
// });
// server.listen(PORT,()=>{
//   console.log(`Server is running at http://${Hostname}:${PORT}`);
// })
const server= http.createServer((req, res) => {
  res.statusCode=500;
  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify({Error:"Internal Server Error"}));
});
server.listen(PORT,()=>{
  console.log(`Server is running at http://${Hostname}:${PORT}`);
})