import { TestBed } from '@angular/core/testing';

import { CharacterSharingService } from './character-sharing.service';

describe('CharacterSharingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharacterSharingService = TestBed.get(CharacterSharingService);
    expect(service).toBeTruthy();
  });
});
