module.exports = (app) => {
    app.post('/', (req, res) => {
        res.send('Requisição POST')
    })
}