import { act, renderHook } from '@testing-library/react-hooks';
import useAddUser from './use-add-user';

describe('useAddUser', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useAddUser());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
