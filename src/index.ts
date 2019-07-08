import * as express from 'express';

const app = express();

app.listen(process.env.PORT || 3000, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server running on ${process.env.PORT || 3000}`);
});
