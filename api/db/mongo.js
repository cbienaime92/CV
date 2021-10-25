const mongoose = require('mongoose');
require('dotenv').config();


const clientOptions = {
    socketTimeoutMS   : 30000,
    keepAlive         : true,
    reconnectTries    : 30000,
    poolSize          : 50,
    useNewUrlParser   : true,
    useUnifiedTopology: true,
    useCreateIndex    : true,
    dbName            : 'CV'
};

exports.initClientDbConnection = async () => {
    
    try {
        await mongoose.connect(process.env.URL_MONGO, clientOptions)
        console.log('Connected');
    } catch (error) {
        console.log(error);
        throw error;
    }
}