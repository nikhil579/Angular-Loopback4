import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './containers/main/main.component';
import { NoteComponent } from './components/note/note.component';
import { NavComponent } from './components/nav/nav.component';
import { NewNoteComponent } from './containers/new-note/new-note.component';
import { FormNoteComponent } from './components/form-note/form-note.component';
import { FormsModule } from '@angular/forms';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { NewUserComponent } from './containers/new-user/new-user.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { UsersPageComponent } from './containers/users-page/users-page.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NoteComponent,
    NavComponent,
    NewNoteComponent,
    FormNoteComponent,
    UserInfoComponent,
    NewUserComponent,
    FormUserComponent,
    UsersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
