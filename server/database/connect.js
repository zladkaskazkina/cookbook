const Mongoose = require("mongoose");
const keys = require("./keys");


class dbConnect {
  connect() {
    Mongoose.connect(keys.mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },(err)=>{
      if(err) throw new Error("K databazi se nejde pripojit")
      console.log("Pripojeno uspesne k databazi")
    })
  }
}

module.exports = dbConnect