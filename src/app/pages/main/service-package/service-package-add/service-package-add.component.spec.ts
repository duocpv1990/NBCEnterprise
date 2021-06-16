import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePackageAddComponent } from './service-package-add.component';

describe('ServicePackageAddComponent', () => {
  let component: ServicePackageAddComponent;
  let fixture: ComponentFixture<ServicePackageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicePackageAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePackageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
