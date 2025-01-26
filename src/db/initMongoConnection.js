const mongoose = require('mongoose');
const pino = require('pino')();

const initMongoConnection = async () => {
  try {
    const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_URL, MONGODB_DB } = process.env;
    const uri = `mongodb+srv://belka3:uTkICqbQY4MPazP1@cluster0.nnm79.mongodb.net/`;

    await mongoose.connect(uri); // Видалено параметри
    pino.info('Mongo connection successfully established!');
  } catch (error) {
  pino.error('Mongo connection failed:', error.message);
  process.exit(1);
}
};

module.exports = initMongoConnection;
