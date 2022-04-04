import { Accessibility } from './accessibility.enum';
import { Price } from './price.model';

export interface User {
  name: string;
  accessibility: Accessibility;
  price: Price;
}
