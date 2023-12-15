import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects = [
  {disable: false,title: 'Personal Site', desc: 'Personal site with work, experience, and projects.', link: '#', src: '../assets/images/personal-site.png', github: 'http://github.com/southnick225/recipe-app'},
  {disable: false, title: 'Angular Course', desc: 'Code along Recipe Book app created in Angular Course.', link: 'http://ng-recipe-book-db-45401.web.app', src: '../assets/images/course-app.png', github: 'http://github.com/southnick225/personal-site'},
  {disable: true,title: 'Checklist Manifesto App', desc: 'Coming Soon...', link: '#', src: '../assets/images/Checklist-Icon-Template-Design-Vector-Graphics-13750844-1.jpg', github: '#'},
  {disable: true,title: 'SuperFood & Supp App', desc: 'Coming Soon...', link: '#', src: '../assets/images/download.jpeg', github: '#'}
  ];

}
