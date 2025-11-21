module.exports = (app) => {
  app.get('/mongodb', (req, res) => {
    async function run() {
      try {
        // Connect the client to the server	(optional starting in v4.7)
        await app.DBClient.connect();
        // Send a ping to confirm a successful connection
        await app.DBClient.db("admin").command({ ping: 1 });
        console.log("Sucesso ao acessar o MongoDB");
        res.send('Conexão Mongodb')
      } finally {
        // Ensures that the client will close when you finish/error
        await app.DBClient.close();
      }
    }
    run().catch(console.dir);
  })
}