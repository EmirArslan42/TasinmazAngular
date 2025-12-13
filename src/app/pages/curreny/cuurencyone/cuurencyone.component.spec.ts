import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuurencyoneComponent } from './cuurencyone.component';

describe('CuurencyoneComponent', () => {
  let component: CuurencyoneComponent;
  let fixture: ComponentFixture<CuurencyoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuurencyoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuurencyoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
