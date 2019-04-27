import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navbarOpen = false;
  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;

constructor (private router: Router) {

}
navigate () {
this.router.navigate(['/accueil']);
}
toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;
}

}
