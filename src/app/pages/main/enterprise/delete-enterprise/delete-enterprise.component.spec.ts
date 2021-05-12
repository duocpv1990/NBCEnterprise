import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEnterpriseComponent } from './delete-enterprise.component';

describe('DeleteEnterpriseComponent', () => {
  let component: DeleteEnterpriseComponent;
  let fixture: ComponentFixture<DeleteEnterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEnterpriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
