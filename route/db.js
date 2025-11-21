module.exports = function (app) {
    app.get('/db', async (req, res) => {
        try {
            await app.DBClient.connect();
            const movies = await app.DBClient.db('sample_mflix').collection('users').find({ name: /^Ma/ }).toArray();
            res.json({ msg: "Arquivo db.js executado", resultado: movies });
            
        } finally {
            //encerra ocorrendo erro
            await client.close();
        }
        
    })
}
