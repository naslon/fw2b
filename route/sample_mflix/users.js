module.exports = (app) => {
  app.get('/users',  async (req, res) => {
    await app.DBClient.connect();

    const users = await app.DBClient.db('sample_mflix')
    .collection('users').find({name:/Stark/}).toArray();

    console.log(users);
    res.send("Users Ok!")
  })}