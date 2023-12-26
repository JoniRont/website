import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() scrollToContentEmitter = new EventEmitter<string>();
  selectedId?: string;



  constructor(private router: Router) {}


  login(event: any): void {
    this.router.navigate(['/']).then((result) => {
      window.open('https://rontynen.org/api');
    });
  }

  scrollToContent(id: string) {
    this.selectedId = id;
    this.scrollToContentEmitter.emit(id)
    console.log(this.scrollToContentEmitter)

  }

}
