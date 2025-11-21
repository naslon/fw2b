var http = require('http');
var server = http.createServer(function (req, res) {
    var url = req.url;
    console.log(req.method)
    if (url == '/'){ 
        res.end('Bem vindo a pagina inicial do IFMS - Dourados');
    }else if (url == '/cursos'){ 
        res.end('Bem vindo aos Cursos do IFMS - Dourados');
    }else if (url == '/pesquisa'){
        res.end('Bem vindo aos Pesquisa do IFMS - Dourados');
    }else if (url == '/esportes'){
        res.end('Bem vindo aos Esportes do IFMS - Dourados');
    
    }else if (url == '/cultura'){
        res.end('Bem vindo aos Cultura do IFMS - Dourados');
    }
})
server.listen(3000);