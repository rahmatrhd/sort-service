import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as morgan from 'morgan';

import routes from './routes';

const app = express();

app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use('/text', routes.text);

export default app;
