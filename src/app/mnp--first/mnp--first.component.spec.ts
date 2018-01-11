import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnpFirstComponent } from './mnp--first.component';

describe('MnpFirstComponent', () => {
  let component: MnpFirstComponent;
  let fixture: ComponentFixture<MnpFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnpFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnpFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
