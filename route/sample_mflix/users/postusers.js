module.exports = (app) => {
    app.post('/postuser', async (req, res) => {
        try {
            const name = req.body.name
            const email = req.body.email
            const password = req.body.password
            await app.DBClient.connect();
            const resultado = await app.DBClient.db('sample_mflix')
                .collection('users')
                .insertOne({ name: name, email: email, password: password })
            res.status(200).send('Gravado com sucesso')
        } catch (error) {
            res.status(400).send(error)
        }
    })
}