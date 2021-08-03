# simple-ioc-lib

[![Build Status](https://travis-ci.org/rwlodkowski/simple-ioc-lib.svg?branch=master)](https://travis-ci.org/rwlodkowski/simple-ioc-lib)
[![License](https://badgen.net/github/license/rwlodkowski/simple-ioc-lib)](./LICENSE)
[![Library minified size](https://badgen.net/bundlephobia/min/simple-ioc-lib)](https://bundlephobia.com/result?p=simple-ioc-lib)
[![Library minified + gzipped size](https://badgen.net/bundlephobia/minzip/simple-ioc-lib)](https://bundlephobia.com/result?p=simple-ioc-lib)

## What is simple-ioc-lib?

simple-ioc-lib is a simple dependency injection library seed written in Typescript.

## Installation

This library is published in the NPM registry and can be installed using any compatible package manager.

```sh
npm install simple-ioc-lib --save

# For Yarn, use the command below.
yarn add simple-ioc-lib
```

## Example

```ts
import { createToken, Container } from 'simple-ioc-lib';

const SERVICES = {
  Person: createToken('Person'),
  Logger: createToken('logger'),
};

interface IPerson {
  name: string;
}

interface ILogger {
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

const person = container.get<IPerson>(SERVICES.Person);
const logger = container.get<ILogger>(SERVICES.Logger);

logger.log(person.name);
```

Go to example folder.

## Documentation

[Documentation generated from source files by Typedoc](./docs/README.md).

## License

Released under [MIT License](./LICENSE).
