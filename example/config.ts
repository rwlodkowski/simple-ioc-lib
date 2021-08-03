import { createToken, Container } from '../src';

export const SERVICES = {
  Person: createToken('Person'),
  Logger: createToken('logger'),
};

export interface IPerson {
  name: string;
}

export interface ILogger {
  log(message: string): void;
}

class Person implements IPerson {
  constructor(public name: string = 'Adam') {}
}

class Logger implements ILogger {
  log(message: string) {
    console.log(message);
  }
}

const container = new Container();
container.register(SERVICES.Person, Person);
container.register(SERVICES.Logger, Logger);

export default container;
