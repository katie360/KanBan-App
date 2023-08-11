import { TaskServiceService } from './task-service.service';
import { TestBed } from '@angular/core/testing';


describe('TaskServiceService', () => {
  let service: TaskServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
