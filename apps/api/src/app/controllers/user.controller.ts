import { Express } from 'express';

import { User } from '@finn-ai-coding-challenge/api-interfaces';

import { DatabaseService } from '../services/database.service';
import { checkValidUser } from '../utilities/check-valid-user.util';

export function registerUserController(app: Express): void {
  app.post('/user', async (req, res) => {
    if (!checkValidUser(req.body)) {
      res.sendStatus(406);
    }

    const user: User = req.body;

    DatabaseService.saveUser(user);
    res.sendStatus(200);
  });
}
