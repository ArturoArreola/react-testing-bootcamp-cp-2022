import { getApiData } from '../../helpers/getApiData';

describe('Tests on getApiData fetch function', () => {

    it('should return valid data when date is valid', async() => {
        const response = await getApiData('2022-01-01');
        expect(response.date).toBe('2022-01-01');
        expect(response.url).toBeDefined();
        expect(response.title).toBeDefined();
        expect(response.explanation).toBeDefined();
    });

    it('should return a 400 status code when the date is out range', async() => {
        const response = await getApiData('1995-06-01');
        expect(response.code).toBe(400);
        expect(response.msg).toBeDefined();
    });
});
