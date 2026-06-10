const request = require('supertest');
const app = require('../src/app');

describe('API Tests', () => {

    test('GET / should return message', async () => {
        const res = await request(app).get('/');
        expect(res.text).toBe('AKS GitOps Demo App Running');
    });

    test('GET /health should return status UP', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe('UP');
    });

});