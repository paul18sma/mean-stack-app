import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';

class Server {
    
    protected app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    config() {
        this.app.set('port', process.env.PORT || 4000);
        // middleware
        this.app.use(morgan('dev'));
        this.app.use(helmet());
        this.routes();
    }


    routes() {
        this.app.get('/', (req, res) => res.send('Hello World'));
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port ${this.app.get('port')}`);
        });
    }
}

export default Server;