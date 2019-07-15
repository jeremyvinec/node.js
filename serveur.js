var http = require('http')

var instructionsNouveauVisiteur = function(req, res) {
    res.writeHead(200);
    res.end('Salut tous le monde !');
};
server.listen(3000)

var server = http.createServer(instructionsNouveauVisiteur)