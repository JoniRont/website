import { Component, ContentChild, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { DrawerService } from './components/services/drawer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  drawerState: boolean = false;
  drawerObserver?: Subscription;
  constructor(private drawerService: DrawerService) {}

  ngOnInit() {
    this.drawerObserver = this.drawerService
      .getDrawerState()
      .subscribe((value) => {
        this.drawerState = value;
      });
  }

  ngOnDestroy() {
    this.drawerObserver?.unsubscribe();
  }
}
