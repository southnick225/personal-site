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
  message = '';
  title = '';
  

  //set the showModal property to the opposite value(true)
  //takes the index of whatever item is clicked in the array to be able to properly set the description for the message property
  showModalIbm(i: number){
    this.showModal = !this.showModal;
    this.message = this.projects_ibm[i].description;
    this.title = this.projects_ibm[i].title;
  }

  showModalBcbs(i: number){
    this.showModal = !this.showModal;
    this.message = this.projects_bcbs[i].description;
    this.title = this.projects_bcbs[i].title;
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
      description: 'Developed and programmed self-paced online learning courses using HTML, CSS, and JavaScript in addition to IBM Gatsby Carbon Framework. Used internal tools and JavaScript widgets to conduct assessments and knowledge checks for users within the courses.'
    },
    {
      title: 'Macys Cognitive Knowledge Management',
      role: 'Site Reliability Engineer',
      description: 'Served as a SRE on the operations team for the Macys and Bloomingdales customer service and agent site (programmed in React and Python) to ensure availability and reliability across all components of the application. Monitor Zendesk and logDNA for errors pertaining to application usability and functionality. Expected to be on call and the point of contact for any issues relating to availability. Perform code updates and deployments.'
      + 'As part of the operations team, was responsible for monitoring ticket system and responding to incoming ticket request. Performed troubleshooting, diagnosing, and resolving of issues related to application function.'
      + 'Created documentation for operation processes such as code deployments to different application environments within the IBM Cloud.'
      + 'Performed code deployments for updated features and coding changes within the application. Used logDNA and pod logs to monitor and identify application alerts and issues.'
    },
    {
      title: 'IBM Internal Cocoon Application',
      role: 'Full Stack Developer',
      description: 'Assisted the dev team with the enhancement of the Cocoon application on both the front and back end using SQL, Angular, and NodeJS. Created API and SQL query in the backend that allowed data to be retrieved, altered, and saved from the front-end. Created new components in Angular that allow data to flow to and from the back-end so that the data can be displayed through a table that allows editing of the data fields when selecting a row in the table on the front-end.'
    },
    {
      title: 'New York State DOL',
      role: 'Emergency UI/PUA Analysis/Data Entry and phone agent',
      description: 'Provide mainframe data entry and analysis services in support of NYS DOL unemployment insurance for workers impacted by the COVID-19 pandemic including DOL Pandemic Unemployment Assistance program for workers not ordinarily eligible for unemployment benefits, pursuant to the federal Coronavirus Aid, Relief, and Economic Security (CARES) Act.'
      + ' Created/Contributed to process documentation outlining processes, work arounds, troubleshooting, and FAQS. Completed data entry after research and troubleshooting to obtain integral pieces of information required to process claims. Served as a telephone agent with access to NYSDOL contact center and corresponding systems of record in order to answer, diagnose, and resolve.'
    },
    {
      title: 'MUFG Bank',
      role: 'SQL Developer',
      description: 'Used data mapping source files to create SQL (files) views built from source and target data within source files. Uploaded source files to AWS S3 buckets. Ran pre-generated python scripts that added data to hive tables using source files from S3. Also reviewed data files to ensure column names were correct and consistent with naming convention.'
    },
    {
      title: 'IBM Global Methods Learning and Knowledge',
      role: 'UI Developer',
      description: 'Responsible for maintaining, editing, and making updates to IBM Global Methods Learning and Knowledge microsite using HTML, CSS, and changing JSON data files to be reflected on the site. Also created test assessments for participants using L&K internal tools. Built internet self-paced online courses for IBMs Learning and Knowledge, leveraging internal templates and JavaScript widgets to aid in the development of sites and assessments for users.'
    },
    {
      title: 'IBM Internal Watson Automation Campaign Landing Page',
      role: 'UI Developer',
      description: 'Created a landing page and click-thru page using HTML and CSS for the marketing campaign. Used Bootstrap 4 to create responsiveness, allowing for the webpages/content to be displayed neatly on devices of all sizes.'
    },
    {
      title: 'Citi Bank Citi Loyalty Program',
      role: 'UI Developer',
      description: 'Using HTML, CSS, JavaScript and Angular to develop a user-friendly interface, implementing visual elements that allow the end-user to easily interact with the blockchain application.'
    },
    {
      title: 'United Technologies Corporation Emptoris Spend Analysis',
      role: 'Data Refresh Engineer',
      description: 'Manage data used for monthly refresh of the Emptoris Spend Analysis web tool. Run queries to obtain control total (number of transactions, total spend in USD). Back-up Emptoris-staging database periodically. Run Update, Insert, Delete statements and use join to access data in multiple tables. Import/export tables using MySQL Workbench and MS Access. Copy, move, and delete files in DEV, QA, and PROD environments in Linux.'
    }
  ];

  //Blue cross projects

  projects_bcbs = [
    {
      title: 'Metrics Report',
      role: 'Developer',
      description: 'Generated metrics reporting weekly for tickets within the Business Engineering team using SQL to pull data and then using pivot tables in excel to display the results. Created and executed SQL queries for claims reports to provide insight on customers affected by configuration mishaps. '
    },
    {
      title: 'Configuration',
      role: 'Configuration Analyst',
      description: 'Provided configuration support by utilizing relational database tools such as MS SQL Management Studio and MS Access to extract and analyze data from core system’s relational databases to determine configuration changes.'
      + 'Migrated and validated configurations in development, test, and production environments according to documented processes and controls.'
      + 'Developed and executed test cases ensuring the quality of configuration and performed analysis of those test results.'
      + 'Documented detailed technical changes to the computer systems, databases, and other software packages supported by the Business Engineering team.'
    }
  ];

}
