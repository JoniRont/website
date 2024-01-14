import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {
  downloadCv(){
    window.open('/assets/joni_rontynen_cv.pdf', '_blank');
  }
}
