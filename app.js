var express = require('express');
var https = require('https');
var path = require('path');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', function (req, res) {
  res.render('pages/index', { title: 'Hey', message: 'Hello there!'})
});

app.get('/:v/:user/:gid', function (req, res) {
  var renderOpts = JSON.parse(JSON.stringify(req.params));
  var basePath = 'gist.githubusercontent.com';
  var body = []; 
  var opts = {}; 
  
  // fetch settings gist
  opts.host = basePath;
  opts.path = path.join('/',req.params.user, req.params.gid, 'raw');
  opts.method = 'GET';
  opts.headers = { 
    Accept: '*/*',
    'User-Agent': 'curl/7.47.0'
  };  
  
  var request = https.request(opts, (gist1) => {
    gist1.on('data', (chunk) => {
      body.push(chunk);
    }); 

    gist1.on('end', () => {
      var payload = Buffer.concat(body).toString();
      console.log('>>>>>>>>>>>>> SETTINGS <<<<<<<<<<<<<<');
      console.log(payload);
      renderOpts.dashSettings = JSON.stringify(JSON.parse(payload));
      renderOpts.test = JSON.stringify({foo: 'foo', bar: 'bar'});
      res.render('pages/dash', renderOpts);
    }); 
  
    gist1.on('error', function (err) {
      console.log('>>>> FETCH ERR <<<<');
      console.log(err)
    }); 
  });

  request.end();

});

app.get('/react-dashboard', (req, res) => {
  res.render('pages/demo');
});

app.listen(3333, function () {
  console.log('Example app listening on port 3333!');
});
