import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreOurCatalogComponent } from './explore-our-catalog.component';

describe('ExploreOurCatalogComponent', () => {
  let component: ExploreOurCatalogComponent;
  let fixture: ComponentFixture<ExploreOurCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreOurCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreOurCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
