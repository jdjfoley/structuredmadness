import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuredMadnessComponent } from './structured-madness.component';

describe('StructuredMadnessComponent', () => {
  let component: StructuredMadnessComponent;
  let fixture: ComponentFixture<StructuredMadnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuredMadnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuredMadnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
