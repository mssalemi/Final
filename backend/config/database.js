const mongoose = require('mongoose');

const MONGO_ATLAS ="mongodb+srv://app-user:User123@cluster0.vc5yp.mongodb.net/twitter-clone?retryWrites=true&w=majority";

mongoose.connect(MONGO_ATLAS, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// shortcut to mongoose.connection object
const db = mongoose.connection;
	
db.on('connected', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});