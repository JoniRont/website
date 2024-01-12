import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-project-x',
  templateUrl: './project-x.component.html',
  styleUrls: ['./project-x.component.scss']
})
export class ProjectXComponent {
  constructor(private route:Router){}
  navigate(){
    this.route.navigate(['main'])
  }
}
