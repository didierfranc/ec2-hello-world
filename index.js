require('http')
  .createServer((i, o) => o.end('hello world'))
  .listen(8080)
