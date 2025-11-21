module.exports = (app) => {
    app.get('/useremail/:nome/:email', async (req, res) => {
        const nome = req.params.nome
        const endeletronico = req.params.email
        await app.DBClient.connect();
        const resultado = await app.DBClient.db('sample_mflix')
            .collection('users')
            .find({$and: [
                    { name: new RegExp(nome, 'i') },
                    { email: new RegExp(endeletronico, 'i') }
                ]
            })
            .toArray();
        res.json(resultado)
    })
}
