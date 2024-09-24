// src/tests/unit/unit_test.js

const request = require('supertest');
const app = require('../../main/app'); // Adjust path if necessary

describe('GET /', () => {
    it('should respond with Hello World!', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello World!');
    });
});
