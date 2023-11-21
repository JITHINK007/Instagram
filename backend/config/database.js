const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect("mongodb+srv://Jithin_K_007:jithin1204@healthassistant.fzuwvng.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongoose Connected");
    }).catch((error) => {
        console.log(error);
    });
}

module.exports = connectDatabase;