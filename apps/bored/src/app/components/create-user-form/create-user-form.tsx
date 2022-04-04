import {
  Accessibility,
  Price,
  User,
} from '@finn-ai-coding-challenge/api-interfaces';
import { useForm } from 'react-hook-form';

import styles from './create-user-form.module.scss';

/* eslint-disable-next-line */
export interface CreateUserFormProps {
  setUser: (u: User) => void;
}

export function CreateUserForm({ setUser }: CreateUserFormProps) {
  const { register, handleSubmit, reset } = useForm<User>();

  const onSubmit = (values: User) => {
    setUser(values);
    reset();
  };

  return (
    <form className={styles['container']} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">
        Name:
        <br />
        <input {...register('name', { required: true })} type="text" />
      </label>

      <fieldset>
        <legend>Accessibility</legend>
        {Object.entries(Accessibility).map(([k, v]) => (
          <label className={styles['label']} key={k} htmlFor="accessibility">
            <input
              {...register('accessibility', { required: true })}
              type="radio"
              value={v}
            />
            {k}
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>Price</legend>
        {Object.entries(Price).map(([k, v]) => (
          <label className={styles['label']} key={k} htmlFor="price">
            <input
              {...register('price', { required: true })}
              type="radio"
              value={v}
            />
            {k}
          </label>
        ))}
      </fieldset>

      <button type="submit">submit</button>
    </form>
  );
}
