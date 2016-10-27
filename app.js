var express = require('express');
var https = require('https');
var path = require('path');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', function (req, res) {
  res.render('pages/index', { title: 'Hey', message: 'Hello there!'})
});

app.get('/:v/:user/:gid1/:gid2', function (req, res) {
  console.log(req.params);
  var basePath = 'gist.githubusercontent.com';
  var body = [];
  var opts = {};
  opts.host = basePath;
  opts.path = path.join('/',req.params.user, req.params.gid1, 'raw');
  opts.method = 'GET';
  opts.headers = {
    Accept: '*/*',
    'User-Agent': 'curl/7.47.0'
  };
  
  console.log(opts);

  var request = https.request(opts, (gist1) => {
    gist1.on('data', (chunk) => {
      console.log('CHUNK');
      console.log(chunk);
      body.push(chunk);
    });

    gist1.on('end', () => {
      var payload = Buffer.concat(body).toString();
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
      console.log(payload);
    });
  
    gist1.on('error', function (err) {
      console.log(err)
    });
  });

  res.render('pages/dash', req.params);
});

app.listen(3333, function () {
  console.log('Example app listening on port 3333!');
});

/**** UTILITY ****/
function getGist(opts) {
  
}
