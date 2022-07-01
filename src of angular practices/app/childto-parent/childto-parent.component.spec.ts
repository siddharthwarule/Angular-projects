import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildtoParentComponent } from './childto-parent.component';

describe('ChildtoParentComponent', () => {
  let component: ChildtoParentComponent;
  let fixture: ComponentFixture<ChildtoParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildtoParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildtoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
