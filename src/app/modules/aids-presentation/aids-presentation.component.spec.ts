import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidsPresentationComponent } from './aids-presentation.component';

describe('AidsPresentationComponent', () => {
  let component: AidsPresentationComponent;
  let fixture: ComponentFixture<AidsPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidsPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
