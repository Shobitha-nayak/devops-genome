// src/tests/integration/integration_test.js

const request = require('supertest');
const app = require('../../main/app');

describe('Integration Test for API', () => {
    it('should return 200 and Hello World! for GET /', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello World!');
    });
});
