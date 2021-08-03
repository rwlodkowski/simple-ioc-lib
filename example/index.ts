import container, { ILogger, IPerson, SERVICES } from './config';

const person = container.get<IPerson>(SERVICES.Person);
const logger = container.get<ILogger>(SERVICES.Logger);

logger.log(person.name);
