import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsList2Component } from './comments-list2.component';

describe('CommentsList2Component', () => {
  let component: CommentsList2Component;
  let fixture: ComponentFixture<CommentsList2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
