import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteexampleComponent } from './posteexample.component';

describe('PosteexampleComponent', () => {
  let component: PosteexampleComponent;
  let fixture: ComponentFixture<PosteexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosteexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosteexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
