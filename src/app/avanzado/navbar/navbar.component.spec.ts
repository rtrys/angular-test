import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref, RouterLink } from '@angular/router';

import { NavbarComponent } from './navbar.component';
import { element } from 'protractor';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de tener un link a la pagina de medicos', () => {
    const elements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    let exist = false;
    for (const elem of elements) {
      if ( elem.attributes['routerLink'] === '/medicos' ) {
        exist = true;
        break;
      }
    }

    expect( exist ).toBeTruthy();
  });
});
