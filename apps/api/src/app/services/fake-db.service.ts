import { User } from '@finn-ai-coding-challenge/api-interfaces';

import { DBService } from '../shared/models/db-service.model';

export class FakeDBService implements DBService {
  private user: User | null = null;

  public getUser(): User | null {
    return this.user ? { ...this.user } : null;
  }

  public saveUser(u: User): void {
    this.user = { ...u };
  }
}
