module.exports = (app) => {
    app.put('/', (req, res) => {
        res.send('Requisição PUT')
    })
}