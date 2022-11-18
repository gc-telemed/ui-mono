import { TestBed } from '@angular/core/testing';

import { TreatmentEditorService } from './treatment-editor.service';

describe('TreatmentEditorService', () => {
  let service: TreatmentEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreatmentEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
