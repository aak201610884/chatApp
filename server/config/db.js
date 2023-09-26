const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://ayhamkattan1:1234@cluster0.vjurtfg.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
    });
    console.log('MongoDB connected.');
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};
//tst2

module.exports = connectDB;
