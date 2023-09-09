import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website';
  scrollToIntroduction(){
    // let el = document.getElementById('introduction');
    // el?.scrollIntoView({behavior: 'smooth'});
  }
}
