module.exports = (app) => {
  app.get('/baratheon',  async (req, res) => {
    await app.DBClient.connect();

    const users = await app.DBClient.db('sample_mflix')
    .collection('users').find({name:/Baratheon/}).toArray();

    //console.log(users);
    res.json({users})
    //res.send("Users Ok!")
  })}