import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as helmet from 'helmet';
import routes from './routes';

dotenv.config();

const port = process.env.BACKEND_PORT;

const startServer = () => {
	const app = express();

	app.use(cors());
	app.use(helmet());
	app.use(bodyParser.json());

	app.use('/api', routes);

	return app.listen(port);
}

const stopServer = (app: any) => {
	app.close();
}

export {
	startServer,
	stopServer,
}
