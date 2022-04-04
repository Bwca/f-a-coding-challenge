import { useState, useCallback } from 'react';

import { Activity } from '@finn-ai-coding-challenge/api-interfaces';
import axios from 'axios';
import { APIEndpoints } from '@finn-ai-coding-challenge/api-constants';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseFetchActivity {
  activity: Activity | null;
  fetchActivity: () => void;
}

export function useFetchActivity(): UseFetchActivity {
  const [activity, setActivity] = useState<Activity | null>(null);

  const fetchActivity = useCallback(async () => {
    try {
      const activity = await (await axios.get(APIEndpoints.Activity)).data;
      setActivity(activity);
      console.log(activity);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return { activity, fetchActivity };
}
