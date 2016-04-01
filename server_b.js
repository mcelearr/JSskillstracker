var http = require("http");
var fs = require("fs");
var url = require("url");
var port = 80;
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
  var headers = request.headers;
  var methods = request.method;
  var body = [];
  console.log(request.headers.host);
  request.on('error', function(err){
    console.log(err);
  }).on('data', function(chunk){
    body.push(chunk);
  }).on('end', function(){
    body = Buffer.concat(body).toString();
  })
  //console.log(request.headers);
  var serveFile = url.parse(request.url).pathname.slice(1);
  if (serveFile.length<1) serveFile = 'index.html';
  var contentType = mimes[url.parse(request.url).pathname.split('.')[1]];

  fs.stat(serveFile, function(err, stats){
    if (err){
      response.writeHead(404, {'Content-Type': 'text/plain'});
      response.end('404 file not found: '+serveFile);
    }
    else if (url.parse(request.url).query){
      var q = url.parse(request.url).query.split('&').map((el)=> el.substring(el.indexOf('=')+1));
      if (q[0]=='login'){
        /*var req = http.request({
          'protocol':'https',
          'host':'github.com',
          'path':'/login/oauth/authorize',
          'connection':'keep-alive',
          'headers':{'client_id':'66afe030254d5293c677'}
        },(res)=>{res.writeHead(301,{Location:'https://github.com/login/oauth'})}*/
        response.writeHead(301, {Location: 'https://github.com/login/oauth/authorize?client_id=44bca640b9dc9b0560bc'});
        response.end();


        //response.writeHead(301,{Location:'https://github.com/login/oauth/authorize?client_id=66afe030254d5293c677'});
        //response.end();
      };
      //console.log(q);
    }
    else {
      //console.log(response.headers);
      response.writeHead(200, {'Content-Type': contentType});
      response.end(fs.readFileSync(serveFile));
    };
  });
});

server.listen(port);
console.log('Server is running at http://localhost:' + port);
