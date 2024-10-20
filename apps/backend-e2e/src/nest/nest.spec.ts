import axios from 'axios';

jest.mock('axios');

describe('GET /api', () => {
  it('should return a message', async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      status: 200,
      data: { message: 'Hello API' },
    });

    const res = await axios.get(`/api`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: 'Hello API' });
  });
});
