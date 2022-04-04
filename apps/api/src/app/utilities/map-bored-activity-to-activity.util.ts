import {
  Accessibility,
  Activity,
  Price,
} from '@finn-ai-coding-challenge/api-interfaces';

import { BoredActivity } from '../shared/models/bored-activity.model';

export function mapBoredActivityToActivity(bored: BoredActivity): Activity {
  const activity: Activity = {
    ...bored,
    accessibility: Accessibility.Low,
    price: Price.Free,
  };

  if (bored.accessibility > 0.25 && bored.accessibility <= 0.75) {
    activity.accessibility = Accessibility.Medium;
  } else if (bored.accessibility > 0.75) {
    activity.accessibility = Accessibility.High;
  }

  if (bored.price && bored.price <= 0.5) {
    activity.price = Price.Low;
  } else if (bored.price > 0.5) {
    activity.price = Price.High;
  }

  return activity;
}
