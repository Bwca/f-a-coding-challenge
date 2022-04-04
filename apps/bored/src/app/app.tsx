import { useEffect } from 'react';

import { Activity } from './components/activity/activity';
import { CreateUserForm } from './components/create-user-form/create-user-form';
import { Profile } from './components/profile/profile';
import { useFetchActivity } from '../hooks/use-fetch-activity/use-fetch-activity';
import { useAddUser } from '../hooks/use-add-user/use-add-user';
import styles from './app.module.scss';

export const App = () => {
  const { activity, fetchActivity } = useFetchActivity();
  const { addUser, user } = useAddUser();

  useEffect(() => {
    fetchActivity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <main className={styles['container']}>
      <CreateUserForm setUser={addUser} />
      {activity && <Activity activity={activity} />}
      {user && <Profile user={user} />}
    </main>
  );
};
