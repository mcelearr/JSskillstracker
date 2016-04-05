//helpers
Array.prototype.queryObj = function(){
  var o = {};
  this.forEach(function(el) {if (el.split('=').length>1&&el.split('=').length<3){o[el.split('=')[0]] = el.split('=')[1]}});
  return o;
}
//required flags: --harmony_array_includes
//host, port, client_id, and client_secret must be passed as last 4 arguments when launched
var settings = process.argv.slice(process.argv.length - 4).queryObj();
var http = require("http");
var https = require("https");
var fs = require("fs");
var url = require("url");
var port = settings.port;
var auth = '';
var token = '';
var user = '';
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
};
var state = '', client_id = settings.client_id, client_secret = settings.client_secret;
var protectedFiles = ['test.html','app'];
var acceptedHosts = [settings.host,'github.com'];
var server = http.createServer(function (request, response){

  var serveFile = url.parse(request.url).pathname.slice(1); //file to serve derived from url
  if (serveFile.length <= 1) serveFile = 'index.html'; //requests of '/' will default to index
  var contentType = mimes[url.parse(request.url).pathname.split('.')[1]]; //url checked against mimes to find content type

  //do not allow requests with TRACE or OPTIONS method
  if (request.method=='TRACE'||request.method=='OPTIONS'){
    response.writeHead(403, {'Content-Type':'text/plain'});
    response.end('Method Disallowed: '+request.method);
  };
  //check against protectedFiles array to stop hotlinking or wget'ing of protected resources
  if (protectedFiles.includes(serveFile.split('/')[0]) && (!request.headers.referer||!acceptedHosts.includes(request.headers.host))){
    response.writeHead(403, {'Content-Type':'text/plain'});
    response.end('403 forbidden');
  }
  //check that file to serve exists
  fs.stat(serveFile, function(err, stats){
    if (err){
      response.writeHead(404, {'Content-Type': 'text/plain'});
      response.end('404 file not found: '+serveFile);
    }
    //serve a file
    else {
      if (url.parse(request.url).query){//check for queries in request and handle them. does this need it's own elseif?
        var q = url.parse(request.url).query.split('&').queryObj();
        /*if (q.set_state){
          state = q.set_state;
          response.writeHead(301, {Location: 'http://www.coudrew.ca/index.html?login=1'});
          response.end();
        }*/
        if (q.login && q.login == 1){
          //state = q.state;
          //console.log(state);
          response.writeHead(301, {Location: 'https://github.com/login/oauth/authorize?client_id='+client_id+'&scope=user&state='+state});
          response.end();
        }
        if (q.code){
          var post_data = 'client_id='+client_id+'&client_secret='+client_secret+'&code='+q.code;
          //console.log(post_data);
          var post_options = {
            protocol: 'https:',
            host: 'github.com',
            path: '/login/oauth/access_token',
            method: 'POST'
            //headers: {'accept':'application/json'}
          };
          var auth_post = https.request(post_options, function(res){
            res.on('data', function(chunk){
              auth += chunk;
            });
            res.on('end', function(){
              auth = auth.split('&').queryObj();
              token = auth.access_token;
	            console.log(auth);
	            console.log(token);
            });
          });
          auth_post.write(post_data);
          auth_post.end();
          //response.writeHead(301, {Location: settings.host+'/app/landing.html'});
          //response.end();
          var get_user_options = {
            protocol: 'https:',
            host: 'api.github.com',
            path: '/user',
            method: 'GET'
            //headers: {'Authorization': auth.access_token,
	    //	      'User-Agent': 'jskt'}
          }
          var get_user = https.request(get_user_options, function(res){
            res.on('data', function(chunk){
              user += chunk;
            });
            res.on('end', function(){
              console.log(user);
            });
          });
	        get_user.setHeader('authorization', token);
	        get_user.setHeader('User-Agent', 'jskt');
          //get_user.send();
          //get_user.end();
	        console.log(get_user.headers);
        };
        };
      response.writeHead(200, {'Content-Type': contentType});
      response.end(fs.readFileSync(serveFile));
    };
  });

});

//go
server.listen(port);
console.log('Server is running at http://localhost:' + port);
