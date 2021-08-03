import { Container, IContainer } from './container';

class MockClass {}
const token = Symbol();
let container: IContainer;

describe('Container ', () => {
  it('Should be defined', () => {
    expect(Container).toBeDefined();
  });

  it('Should register value to registry and get it back', () => {
    container = new Container();
    container.register(token, MockClass);
    const service = container.get(token);
    expect(service).toBe(MockClass);
  });
});
