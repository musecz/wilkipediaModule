/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WilkipediaService } from './wilkipedia.service';

describe('Service: Wilkipedia', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WilkipediaService]
    });
  });

  it('should ...', inject([WilkipediaService], (service: WilkipediaService) => {
    expect(service).toBeTruthy();
  }));
});
