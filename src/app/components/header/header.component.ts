import { Component, EventEmitter, Output } from '@angular/core';
import { Router, Event, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() scrollToContentEmitter = new EventEmitter<string>();
  currentPath?: string;



  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
   this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd){
        console.log(event.url)
        this.currentPath = event.url
      }
    })

  }


  login(): void {
    this.router.navigate(['/']).then((_) => {
      window.open('https://rontynen.org/api');
    });

  }


  navigate(path:string){
    console.log('navigate')
    this.router.navigate([path])
  }

}
