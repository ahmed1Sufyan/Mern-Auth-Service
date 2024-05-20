// import request from '"supertest"';
import request from 'supertest';
import app from '../../src/app';
import { describe, expect, test } from '@jest/globals';
import { DataSource } from 'typeorm';
import { AppDataSource } from '../../src/config/data-source';
import { truncateTables } from '../utils';
import { User } from '../../src/entity/User';

describe('POST /auth/register', () => {
    let connection: DataSource;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    beforeAll(async () => {
        connection = await AppDataSource.initialize();
    });

    beforeEach(async () => {
        await truncateTables(connection);
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    afterAll(async () => {
        //it will disconnect the db
        await connection.destroy();
    });

    describe('Given all fields', () => {
        test('should return 201 status', async () => {
            //Arrange
            const userdata = {
                firstName: 'Sufyan',
                lastName: 'Ahmed',
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
        test('should return valid json response', async () => {
            //Arrange
            const userdata = {
                firstName: 'Sufyan',
                lastName: 'Ahmed',
                email: 'csc21s135@gmail.com',
                password: '123456',
            };
            //Act
            const response = await request(app)
                .post('/auth/register')
                .send(userdata);

            //Assert
            expect(response.headers['content-type']).toEqual(
                expect.stringContaining('json'),
            );
        });
        test('should persist user data in the database', async () => {
            //Arrange
            const userdata = {
                firstName: 'Sufyan',
                lastName: 'Ahmed',
                email: 'csc21s135@gmail.com',
                password: '123456',
            };
            //Act
            await request(app).post('/auth/register').send(userdata);

            //Assert
            const userRepository = connection.getRepository(User);
            const users = await userRepository.find();
            expect(users).toHaveLength(1);
        });
    });
});
