module.exports = (app) => {
    app.get('/routing/:abobrinha', (req, res) => {
        //console.log(req)
        res.send("Routing1:"+req.params.abobrinha)
    })

}

// https://expressjs.com/pt-br/guide/routing.html