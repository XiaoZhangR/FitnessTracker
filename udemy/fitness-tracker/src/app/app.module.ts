import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './auth/signup/signup.component';
import { TrainingComponent } from './training/training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { PastTrainingComponent } from './training/past-training/past-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    PastTrainingComponent,
    NewTrainingComponent,
    WelcomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
