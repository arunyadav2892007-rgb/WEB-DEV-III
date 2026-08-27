const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.write('Welcome to Node Server');
    res.end();
  } else if (req.url === '/about') {
    res.write('AboutPage');
    res.end();
  } else if (req.url === '/contact') {
    res.write('Contact Page');
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
