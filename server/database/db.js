import mongoose from 'mongoose';

// setting default Promise
mongoose.Promise = global.Promise;

const MONGODB_URI = 'mongodb://root:123456@ds137101.mlab.com:37101/graphqldb';

mongoose.connect(MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${MONGODB_URI}`)
});

mongoose.connection.on('disconnected', () => {
  console.log(`Mongoose disconnected`)
});


mongoose.connection.on('error', (err) => {
  console.log('Mongoose error', err)
});

process.on("SIGINT",function(){
  mongoose.connection.close(function(){
    console.log("Mongoose disconnected through app terminantion (SIGINT)");
    process.exit(0);
  })
});

process.on("SIGTERM",function(){
  mongoose.connection.close(function(){
    console.log("Mongoose disconnected through app terminantion (SIGTERM)");
    process.exit(0);
  })
});

process.once("SIGUSR2",function(){
  mongoose.connection.close(function(){
    console.log("Mongoose disconnected through app terminantion (SIGUSR2)");
    process.kill(process.pid,'SIGUSR2');
  })
});


export default mongoose;