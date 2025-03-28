import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectNameComponent } from './project-name.component';

describe('ProjectNameComponent', () => {
  let component: ProjectNameComponent;
  let fixture: ComponentFixture<ProjectNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
