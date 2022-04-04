import { User } from '@finn-ai-coding-challenge/api-interfaces';

export interface DBService {
  saveUser: (u: User) => void;
  getUser: () => User | null;
}
