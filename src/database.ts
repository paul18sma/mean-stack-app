import mongoose from 'mongoose';

export const initializeMongo = (): void => {
    const MONGO_URI = 'mongodb://localhost/authrestapi';
    mongoose.set('useFindAndModify', true);
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }).then( db => console.log('DB is connected') );
}