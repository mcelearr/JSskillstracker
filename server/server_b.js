var http = require("http");
var fs = require("fs");
var url = require("url");
var port = 8000;
var mimes = {
  "html": "text/html",
  "css": "text/css",
  "js": "text/javascript",
  "jpeg": "image/jpeg",
  "jpg": "image/jpeg",
  "png": "image/png",
  "ico": "image/x-icon",
  "svg": "image/svg+xml",
  "mp4a": "audio/mp4",
  "mp4": "video/mp4"
}
var server = http.createServer(function (request, response){
  var serveFile = url.parse(request.url).pathname.slice(1);
  if (serveFile.length<1) serveFile = 'index.html';
  var contentType = mimes[url.parse(request.url).pathname.split('.')[1]];

  fs.stat(serveFile, function(err, stats){
    if (err){
      response.writeHead(404, {'Content-Type': 'text/plain'});
      response.end('404 file not found: '+serveFile);
    }
    else {
      response.writeHead(200, {'Content-Type': contentType});
      response.end(fs.readFileSync(serveFile));
    };
  });
});

server.listen(port);

console.log('Server is running at http://localhost:' + port);
