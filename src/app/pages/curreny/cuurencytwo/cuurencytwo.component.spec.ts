import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuurencytwoComponent } from './cuurencytwo.component';

describe('CuurencytwoComponent', () => {
  let component: CuurencytwoComponent;
  let fixture: ComponentFixture<CuurencytwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuurencytwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuurencytwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
