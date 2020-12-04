import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailspaneComponent } from './detailspane.component';

describe('DetailspaneComponent', () => {
  let component: DetailspaneComponent;
  let fixture: ComponentFixture<DetailspaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailspaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailspaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
