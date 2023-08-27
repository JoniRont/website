import { DOCUMENT } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.scrollY >= 50;
  }

  isSticky: boolean = false;

  constructor(private router: Router) {}


  login(event: any): void {
    this.router.navigate(['/']).then((result) => {
      window.open('https://rontynen.org/api');
    });
  }
}
