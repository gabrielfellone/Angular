import { TestBed } from '@angular/core/testing';

import { TestjsonService } from './testjson.service';

describe('TestjsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestjsonService = TestBed.get(TestjsonService);
    expect(service).toBeTruthy();
  });
});
