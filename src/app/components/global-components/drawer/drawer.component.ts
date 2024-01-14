import { Component } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { DrawerService } from '../../services/drawer.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent {
  currentPath?: string;

  constructor(private router: Router, private drawerService: DrawerService) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentPath = event.url;
      }
    });
  }
  navigate(path: string) {
    this.router.navigate([path]);
  }
  login(): void {
    this.router.navigate(['/']).then((_) => {
      window.open('https://rontynen.org/api');
    });
  }
  closeDrawer() {
    this.drawerService.toggleDrawer();
  }
}
