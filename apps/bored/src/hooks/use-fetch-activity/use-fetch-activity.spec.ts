import { act, renderHook } from '@testing-library/react-hooks';
import useFetchActivity from './use-fetch-activity';

describe('useFetchActivity', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useFetchActivity());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
