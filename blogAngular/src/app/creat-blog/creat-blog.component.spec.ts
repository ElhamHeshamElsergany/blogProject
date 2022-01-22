import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatBlogComponent } from './creat-blog.component';

describe('CreatBlogComponent', () => {
  let component: CreatBlogComponent;
  let fixture: ComponentFixture<CreatBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
