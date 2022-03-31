import request from 'supertest';
import { app } from './server';

describe('GET /', () => {
  it('should return Hello World', async () => {
    // three parts: Arrange, Act, Assert
    // Act:
    const response = await request(app).get('/').send();

    // Assert:
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World');
  });
});

describe.only('POST /', () => {
  it('should return error when what not provided', async () => {
    // three parts: Arrange, Act, Assert
    // Act:
    const response = await request(app).post('/').send({ numbers: [1, 2, 3] });

    // Assert:
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('Please provide what and numbers');
  });

  it('should return 6 when provided sum and [1,2,3]', async () => {
    // three parts: Arrange, Act, Assert
    // Act:
    const response = await request(app).post('/').send({what: 'sum', numbers: [1, 2, 3]});

    // Assert:
    expect(response.statusCode).toBe(200);
    expect(response.body.result).toBe('6');
  });

  it('should return [2,4,6] when provided double and [1,2,3]', async () => {
    // three parts: Arrange, Act, Assert
    // Act:
    const response = await request(app).post('/').send({what: 'double', numbers: [1, 2, 3]});

    // Assert:
    expect(response.statusCode).toBe(200);
    expect(response.body.result).toEqual('2,4,6');
  });
});