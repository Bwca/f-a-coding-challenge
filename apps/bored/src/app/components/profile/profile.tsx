import { User } from '@finn-ai-coding-challenge/api-interfaces';

import styles from './profile.module.scss';

/* eslint-disable-next-line */
export interface ProfileProps {
  user: User;
}

export function Profile({ user }: ProfileProps) {
  return (
    <div className={styles['container']}>
      <h2>Profile!</h2>
      {Object.entries(user).map(([k, v]) => (
        <p key={k}>
          <strong className={styles['activity-name']}>{k}: </strong>
          {v}
        </p>
      ))}
    </div>
  );
}
