var express  = require('express');
var openam = require('openam-agent');
var app      = express();
var agent = new openam.PolicyAgent({
        serverUrl: 'http://35.203.155.12:8080/lab126-authm',
        appUrl: 'localhost:2000',
        notificationRoute: '/',
        notificationsEnabled: true,
        username: 'MyPolicyAgent',
        password: 'secret123',
        realm: '/'
    });

var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var serverOne = 'http://localhost:3000';

var cookieShield = new openam.CookieShield();
app.use('/some/protected/route', agent.shield(cookieShield), function (req, res, next) {
    // your route handler code here
});
    
app.all("/*", function(req, res) {
    console.log('redirecting to Server1');
    apiProxy.web(req, res, {target: serverOne});
});


app.listen(2000);
