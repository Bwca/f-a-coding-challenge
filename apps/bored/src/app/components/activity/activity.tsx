import { Activity as UserActivity } from '@finn-ai-coding-challenge/api-interfaces';

import styles from './activity.module.scss';

/* eslint-disable-next-line */
export interface ActivityProps {
  activity: UserActivity;
}

export function Activity({ activity }: ActivityProps) {
  return (
    <div className={styles['container']}>
      <h2>Activity!</h2>

      {Object.entries(activity).map(([k, v]) => (
        <p key={k}>
          <strong className={styles['activity-name']}>{k}: </strong>
          {v}
        </p>
      ))}
    </div>
  );
}
