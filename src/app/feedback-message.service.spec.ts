import { TestBed } from '@angular/core/testing';

import { FeedbackMessageService } from './feedback-message.service';

describe('FeedbackMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeedbackMessageService = TestBed.get(FeedbackMessageService);
    expect(service).toBeTruthy();
  });
});
