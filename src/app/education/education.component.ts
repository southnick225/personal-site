import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  schools = [
    {title: 'Woodlawn High School', desc: 'Graduate and stand out athlete of Woodlawn High BR.', buttonText: 'Class of 2011', image: 'https://static.wixstatic.com/media/71982f_f6f99a438cdc4e5fa767bd6946ec6eb6~mv2.png/v1/fill/w_252,h_251,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Woodlawn%20High%20School%20W%20Logo_edited.png'}, 
  {title: 'Southern University A&M', desc: 'Alumni of the late great HBCU with a bachelors in Computer Science.', buttonText: 'Class of 2017', image: 'https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/gojagsports.com/images/logos/site/site.png'}
];

certs = [
  {title: 'AWS Developer – Associate', description: 'Showcases knowledge and understanding of core AWS services, uses, and basic AWS architecture best practices, and proficiency in developing, deploying, and debugging cloud-based applications by using AWS.', expired: "2019-2022", image: 'https://k21academy.com/wp-content/uploads/2021/09/AWS-2.png'},
{title: 'AWS Cloud Practioner', description: 'Validates foundational, high-level understanding of AWS Cloud, services, and terminology.', expired: "2019-2022", image: 'https://k21academy.com/wp-content/uploads/2021/09/AWS-2.png'}
]

}
