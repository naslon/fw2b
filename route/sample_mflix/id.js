module.exports = (app) => {
    app.get('/users/:name', async (req, res) => {
        const nome = req.params.name;
        await app.DBClient.connect();

        const users = await app.DBClient.db('sample_mflix')
            .collection('users').find({ name:{ $regex: nome, $options: 'i' } }).toArray();

        console.log(users);
        res.send("Users Ok!")
    })
}

// https://expressjs.com/pt-br/guide/routing.html