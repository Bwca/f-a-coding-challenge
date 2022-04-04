import * as express from 'express';

import { registerActivityController } from './app/controllers/activity.controller';
import { registerUserController } from './app/controllers/user.controller';

const app = express();
app.use(express.json());

registerActivityController(app);
registerUserController(app);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port);
});
server.on('error', console.error);
