const connection_url = "mongodb://testuser:testpassport@ds054289.mlab.com:54289/notesdb"

export default (mongoose) => {
  mongoose.connect(connection_url);
  let db = mongoose.connection;

  db.on('error',(err) => {
    console.log('connection err:'+err);
  })
  db.on('open',() => {
    console.log('successful connection')
  });
}
