var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Welcome to our super-simple test harness. Visit thisUrl.com/:DASH_VERSION/:GIST_SETTINGS_ID/:GIST_FUNCTIONS_FILE_ID to see your React-Dash!');
});

app.get('/:v/:gid1/:gid2', function (req, res) {
  console.log(req.params);
  var user = req.params.user || 'Unknown';
  res.send('<ul>\
              <li>DASH VERSION :   ' + req.params.v      + '</li>\
              <li>SETTINGS ID  :   ' + req.params.gid1   + '</li>\
              <li>FUNCTIONS ID :   ' + req.params.gid2   + '</li>\
            </ul>');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
