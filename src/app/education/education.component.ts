import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  schools = [
    {title: 'Woodlawn High School', desc: 'Graduate and stand out athlete of Woodlawn High BR.', buttonText: 'Class of 2011'}, 
  {title: 'Southern University A&M', desc: 'Alumni of the late great HBCU with a bachelors in Computer Science.', buttonText: 'Class of 2017'}
];

certs = [
  {title: 'AWS Developer – Associate', description: 'Showcases knowledge and understanding of core AWS services, uses, and basic AWS architecture best practices, and proficiency in developing, deploying, and debugging cloud-based applications by using AWS.', expired: "2019-2022"},
{title: 'AWS Cloud Practioner', description: 'Validates foundational, high-level understanding of AWS Cloud, services, and terminology.', expired: "2019-2022"}
]

}
