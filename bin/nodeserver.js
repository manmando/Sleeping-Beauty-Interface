var http = require('http');
var Cylon = require('cylon');
 
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  Cylon.robot({
	  connections: {
		neurosky: { adaptor: 'neurosky', port: 'COM14' }
	  },

	  devices: {
		headset: { driver: 'neurosky' }
	  },

	  work: function(my) {
		my.headset.on('meditation', function(data) {
		  //res.write(" " + JSON.stringify(data) + ",");
		
		res.write("data: " + data + ",");});
		// todo: creare coda da popolare con i campionamenti dei ritmi filtrati
		// poi integrare sugli elementi della coda per valutare una scelta
		
	}).start();
  
})
 
server.listen(1337, '127.0.0.1');
 
console.log('Server running at http://127.0.0.1:1337/');
