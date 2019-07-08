import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as morgan from 'morgan';

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.listen(process.env.PORT || 3000, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server running on ${process.env.PORT || 3000}`);
});
