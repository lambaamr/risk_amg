import { TestBed, inject } from '@angular/core/testing';

import { Game2Service } from './game2.service';

describe('Game2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Game2Service]
    });
  });

  it('should be created', inject([Game2Service], (service: Game2Service) => {
    expect(service).toBeTruthy();
  }));
});
