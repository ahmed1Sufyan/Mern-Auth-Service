import app from './src/app';
import { Add, Subtract } from './src/utils';
import request from 'supertest';
describe('App', () => {
    test('Add should work', () => {
        const result = Add(10, 20);
        expect(result).toBe(30);
    });
    test('Subtract should work', () => {
        const result = Subtract(30, 20);
        expect(result).toBe(10);
    });
    test('should should 200 status', async () => {
        const response = await request(app).get('/').send();
        expect(response.statusCode).toBe(200);
    });
});
