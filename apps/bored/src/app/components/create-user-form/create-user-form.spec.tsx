import { render } from '@testing-library/react';

import CreateUserForm from './create-user-form';

describe('CreateUserForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreateUserForm />);
    expect(baseElement).toBeTruthy();
  });
});
