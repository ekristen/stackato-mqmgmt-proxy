var httpProxy = require('http-proxy');

var vcap_services = JSON.parse(process.env.VCAP_SERVICES);

var host = vcap_services.rabbitmq[0].credentials.host;
var port = parseInt(vcap_services.rabbitmq[0].credentials.port) + 10000;

httpProxy.createServer(port, host).listen(process.env.PORT);
