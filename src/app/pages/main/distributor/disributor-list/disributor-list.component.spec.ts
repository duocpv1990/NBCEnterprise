import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisributorListComponent } from './disributor-list.component';

describe('DisributorListComponent', () => {
  let component: DisributorListComponent;
  let fixture: ComponentFixture<DisributorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisributorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisributorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
