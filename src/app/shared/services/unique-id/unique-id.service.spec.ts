import { empty } from 'rxjs';
import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {

  let service: UniqueIdService = null;

  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWhitPrefix.name} should generate Id when called with prefix`, () => {
    const id = service.generateUniqueIdWhitPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWhitPrefix.name} should not generate duplicate IDs when called multiple times`, () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWhitPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should return the number of generateIds called number`,  () => {
    service.generateUniqueIdWhitPrefix('app');
    service.generateUniqueIdWhitPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWhitPrefix.name} should throw when called with empty`, () => {
    const emptyValues = [null, undefined, '', '0', '1'];
    emptyValues.forEach(emptyValue => {
      expect(() => service.generateUniqueIdWhitPrefix(emptyValue))
      .withContext(`Empty value: ${emptyValue}`).toThrow();
    });
  });

});


