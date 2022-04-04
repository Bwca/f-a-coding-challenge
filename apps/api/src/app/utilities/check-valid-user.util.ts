import {
  Accessibility,
  Price,
  User,
} from '@finn-ai-coding-challenge/api-interfaces';

export function checkValidUser(potentialUser: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [k in keyof User]: any;
}): boolean {
  return (
    typeof potentialUser.name === 'string' &&
    Object.values(Accessibility).includes(potentialUser.accessibility) &&
    Object.values(Price).includes(potentialUser.price)
  );
}
