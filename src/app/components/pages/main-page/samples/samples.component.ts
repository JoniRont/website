import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.scss']
})
export class SamplesComponent {
  constructor(private router: Router){}
  navigate(){
    this.router.navigate(['project-x'])
  }
}
