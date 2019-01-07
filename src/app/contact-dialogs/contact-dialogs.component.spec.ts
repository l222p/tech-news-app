import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDialogsComponent } from './contact-dialogs.component';

describe('ContactDialogsComponent', () => {
  let component: ContactDialogsComponent;
  let fixture: ComponentFixture<ContactDialogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDialogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
