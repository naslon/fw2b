module.exports = (app) => {
    app.put('/putuser', async (req, res) => {
        try {
            const name = req.body.name
            const email = req.body.email
            const password = req.body.password
            const resultado = await app.DBClient.db('sample_mflix')
                .collection('users')
                .updateOne( {name: name},{ $set:{name:name,email:email,password:password}})
            res.status(200).send('Atualizado com sucesso')
        } catch (error) {
            res.status(400).send(error)
        }
    })
}