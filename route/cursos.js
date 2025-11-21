module.exports = function (app) {
    app.get('/cursos', (req, res) => {
        res.render('./cursos')
    })
}

