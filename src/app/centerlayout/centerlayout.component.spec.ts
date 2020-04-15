import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterlayoutComponent } from './centerlayout.component';

describe('CenterlayoutComponent', () => {
  let component: CenterlayoutComponent;
  let fixture: ComponentFixture<CenterlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
