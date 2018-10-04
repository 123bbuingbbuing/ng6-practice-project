import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FansitesDirectoryComponent } from './fansites-directory.component';

describe('FansitesDirectoryComponent', () => {
  let component: FansitesDirectoryComponent;
  let fixture: ComponentFixture<FansitesDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FansitesDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FansitesDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
