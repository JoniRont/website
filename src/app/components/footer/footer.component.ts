import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  now? = 2023;
  constructor(){
    this.now = new Date().getFullYear()
  }
}
