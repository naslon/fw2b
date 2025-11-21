module.exports = (app) => {
    app.delete('/', (req, res) => {
        res.send('Requisição Delete')
    })
}