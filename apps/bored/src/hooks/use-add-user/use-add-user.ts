import { useState, useCallback } from 'react';

import axios from 'axios';

import { APIEndpoints } from '@finn-ai-coding-challenge/api-constants';
import { User } from '@finn-ai-coding-challenge/api-interfaces';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseAddUser {
  user: User | null;
  addUser: (user: User) => void;
}

export function useAddUser(): UseAddUser {
  const [user, setUser] = useState<User | null>(null);

  const addUser = useCallback(async (user: User) => {
    try {
      await axios.post(APIEndpoints.User, user);
      setUser(user);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return { user, addUser };
}
