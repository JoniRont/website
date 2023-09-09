import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  title = 'website';
  scrollToIntroduction(id: string){
    let el = document.getElementById(id);
    el?.scrollIntoView({behavior: 'smooth'});
  }

}
