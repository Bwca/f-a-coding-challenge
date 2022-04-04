import { DBService } from '../shared/models/db-service.model';
import { FakeDBService } from './fake-db.service';

export const DatabaseService: DBService = new FakeDBService();
