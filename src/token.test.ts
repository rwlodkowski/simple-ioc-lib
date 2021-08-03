import { createToken } from './token';

describe('Token ', () => {
  it('Should be defined ', () => {
    expect(createToken).toBeDefined();
  });

  it('Should create valid token symbol ', () => {
    const token = createToken();
    expect(typeof token).toBe('symbol');
  });
});
