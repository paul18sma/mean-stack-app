import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import mongoose from 'mongoose';
import cors from 'cors';
import compression from 'compression';

import indexRoutes from './routes/index';
import authRoutes from './routes/auth';

class Server {
    
    protected app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    config() {
        const MONGO_URI = 'mongodb://localhost/authrestapi';
        mongoose.set('useFindAndModify', true);
        mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        }).then( db => console.log('DB is connected') );
        // setting
        this.app.set('port', process.env.PORT || 4000);
        // middleware
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(morgan('dev'));
        this.app.use(helmet());
        this.app.use(compression());
        this.app.use(cors());
        // routes
        this.routes();
    }

    routes() {
        this.app.use('/api/auth', authRoutes);
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port ${this.app.get('port')}`);
        });
    }
}

export default Server;