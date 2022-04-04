import { Express } from 'express';

import axios from 'axios';

import { Activity } from '@finn-ai-coding-challenge/api-interfaces';
import { APIEndpoints } from '@finn-ai-coding-challenge/api-constants';

import { BoredActivity } from '../shared/models/bored-activity.model';
import { mapBoredActivityToActivity } from '../utilities/map-bored-activity-to-activity.util';
import { DatabaseService } from '../services/database.service';

export function registerActivityController(app: Express): void {
  app.get(APIEndpoints.Activity, async (req, res) => {
    let activity: Activity;
    const user = DatabaseService.getUser();

    do {
      const { data } = await axios.get<BoredActivity>(
        'http://www.boredapi.com/api/activity/'
      );
      activity = mapBoredActivityToActivity(data);
    } while (
      user &&
      (user.accessibility !== activity.accessibility ||
        user.price !== activity.price)
    );

    res.send(activity);
  });
}
