import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { DrawerService } from '../services/drawer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  currentPath?: string;
  constructor(private router: Router, private drawerService: DrawerService) {
   this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd){
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
    this.router.navigate([path])
  }
  toggleDrawer(){
    this.drawerService.toggleDrawer()
  }
}
