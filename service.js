var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Cotacao de Moedas',
  description: 'Apenas uma descrição',
  script: 'C:\\nodemysql\\apinodes'
});
 
// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});
 
svc.install();