import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [AppComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });

  it('should assert foo returns proper values', () => {
      let fixture = TestBed.createComponent(AppComponent);
      let component = fixture.componentInstance;

      expect(component.foo(16)).toEqual(10);
      expect(component.foo(1)).toEqual(100);
  });
});
