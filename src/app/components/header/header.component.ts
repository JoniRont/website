import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @HostListener('window:scroll', ['$event'])
  // @Output() introductionScrollEvent = new EventEmitter<HTMLElement>();
  checkScroll() {
    this.isSticky = window.scrollY >= 80;
  }

  isSticky: boolean = false;

  constructor(private router: Router) {}


  login(event: any): void {
    this.router.navigate(['/']).then((result) => {
      window.open('https://rontynen.org/api');
    });
  }

  scroll() {
    // el.scrollIntoView(({behavior: 'smooth'}));
    // this.introductionScrollEvent.emit()
}
}
