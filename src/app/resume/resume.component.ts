import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  //showModal - used with *ngIf directive to display the modal or not.
  //message - for the value to be passed to the alert component [message] property

  showModal = false;
  message = 'just a test!';
  

  //set the showModal property to the opposite value(true)
  //takes the index of whatever item is clicked in the array to be able to properly set the description for the message property
  showModalIbm(i: number){
    this.showModal = !this.showModal;
    this.message = this.projects_ibm[i].description;
  }

  showModalBcbs(i: number){
    this.showModal = !this.showModal;
    this.message = this.projects_bcbs[i].description;
  }

  //uses the click event passed through output in the alert component to set showModal property back to false. to close the modal
  closeModal(){
    this.showModal = !this.showModal;
  }

//IBM projects

  projects_ibm = [
    {
      title: 'IBM Global Leraning and Knowledge',
      role: 'UI Developer',
      description: 'test 1'
    },
    {
      title: 'Macys Cognitive Knowledge Management',
      role: 'Site Reliability Engineer',
      description: 'test 2'
    },
    {
      title: 'IBM Internal Cocoon Application',
      role: 'Full Stack Developer',
      description: 'test 3'
    },
    {
      title: 'New York State DOL',
      role: 'Emergency UI/PUA Analysis/Data Entry and phone agent',
      description: 'lorem empsum sdf dfdfvf vvfv fv fvdvdvdvdvfvfvfvfvffvfvfv'
    },
    {
      title: 'MUFG Bank',
      role: 'SQL Developer',
      description: 'lorem empsum sdf dfdfvf vvfv fv fvdvdvdvdvfvfvfvfvffvfvfv'
    },
    {
      title: 'IBM Global Methods Learning and Knowledge',
      role: 'UI Developer',
      description: 'lorem empsum sdf dfdfvf vvfv fv fvdvdvdvdvfvfvfvfvffvfvfv'
    },
    {
      title: 'IBM Internal Watson Automation Campaign Landing Page',
      role: 'UI Developer',
      description: 'lorem empsum sdf dfdfvf vvfv fv fvdvdvdvdvfvfvfvfvffvfvfv'
    },
    {
      title: 'Citi Bank Citi Loyalty Program',
      role: 'UI Developer',
      description: 'lorem empsum sdf dfdfvf vvfv fv fvdvdvdvdvfvfvfvfvffvfvfv'
    },
    {
      title: 'United Technologies Corporation Emptoris Spend Analysis',
      role: 'Data Refresh Engineer',
      description: 'lorem empsum sdf dfdfvf vvfv fv fvdvdvdvdvfvfvfvfvffvfvfv'
    }
  ];

  //Blue cross projects

  projects_bcbs = [
    {
      title: 'Metrics Reports',
      role: 'Developer',
      description: 'test 9'
    },
    {
      title: 'Configuration/Data Entry',
      role: 'Configuration Analyst',
      description: 'test 10'
    }
  ];

}
