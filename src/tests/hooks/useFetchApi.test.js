import { renderHook } from '@testing-library/react-hooks';
import { useFetchApi } from "../../hooks/useFetchApi";

describe('Tests on useFetchApi', () => {

    it('Must return initialState', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchApi('2022-01-01'));
        const { data, loading } = result.current;
        await waitForNextUpdate();
        expect(data).toEqual({});
        expect(loading).toBe(true);
    });

    it('Must return dat and loading in false', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchApi('2022-01-01'));
        await waitForNextUpdate();
        const {data, loading} = result.current;
        const {date} =  data;
        expect(date).toBe('2022-01-01');
        expect(loading).toBe(false);
    });
});