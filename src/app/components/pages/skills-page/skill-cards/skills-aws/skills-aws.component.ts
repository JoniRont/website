import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-skills-aws',
  templateUrl: './skills-aws.component.html',
  styleUrls: ['./skills-aws.component.scss']
})
export class SkillsAWSComponent {
  constructor(private router: Router){}
  navigate(){
    this.router.navigate(['project-x'])
  }
}
