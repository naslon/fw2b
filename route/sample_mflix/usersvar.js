module.exports = (app) => {
  app.get('/usuario/:var', async (req, res) => {
    await app.DBClient.connect();
    const usuario = req.params.var
    const users = await app.DBClient.db('sample_mflix')
      .collection('users').find({ name: new RegExp(usuario, 'i') }).toArray();
    // res.send("Users Ok!"+users)
    res.json({tusers: users.length,users})
  })
}