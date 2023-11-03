import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    ResumeComponent,
    ContactComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
