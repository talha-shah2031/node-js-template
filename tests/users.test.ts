// tests/user.test.ts
import request from 'supertest';
import app from '../src/app';

describe('Users API', () => {
  it('should return 200 on GET /api/users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
  });
});
