import request from 'supertest';
import app from '../../src/app';

describe('POST /auth/register', () => {
    describe('Given all fields', () => {
        test('should return 201 status', async () => {
            //Arrange
            const userdata = {
                firstname: 'Sufyan',
                lastname: 'Ahmed',
                email: 'csc21s135@gmail.com',
                password: '123456',
            };
            //Act
            const response = await request(app)
                .post('/auth/register')
                .send(userdata);

            //Assert
            expect(response.statusCode).toBe(201);
        });
    });
});
