import { Express } from 'express';

import { User } from '@finn-ai-coding-challenge/api-interfaces';
import { APIEndpoints } from '@finn-ai-coding-challenge/api-constants';

import { DatabaseService } from '../services/database.service';
import { checkValidUser } from '../utilities/check-valid-user.util';

export function registerUserController(app: Express): void {
  app.post(APIEndpoints.User, async (req, res) => {
    if (!checkValidUser(req.body)) {
      res.sendStatus(406);
    }

    const user: User = req.body;

    DatabaseService.saveUser(user);
    res.sendStatus(200);
  });
}
