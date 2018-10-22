var express  = require('express');
var openAMAgent = require('openam-agent');
var app      = express();
agent = openamAgent({openamUrl: 'http://35.203.155.12:8080/lab126-auth'});
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var serverOne = 'http://35.197.24.127:5000';

app.get('/', agent.shield(openamAgent.cookieShield({getProfiles: true})), function (req, res) {
    console.log(req.session.userName);
    });
    
app.all("/*", function(req, res) {
    console.log('redirecting to Server1');
    apiProxy.web(req, res, {target: serverOne});
});


app.listen(2000);
