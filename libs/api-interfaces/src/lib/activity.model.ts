import { Accessibility } from './accessibility.enum';
import { Price } from './price.model';

export interface Activity {
  activity: string;
  type: string;
  participants: number;
  price: Price;
  link: string;
  key: string;
  accessibility: Accessibility;
}
