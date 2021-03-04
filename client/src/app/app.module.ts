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
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { UsersPageComponent } from './containers/users-page/users-page.component';
import { ListUsersComponent } from './containers/list-users/list-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

//material UI
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DemoMaterialModule } from './material-module';
import { MatNewUserComponent } from './components/mat-new-user/mat-new-user.component';
import { ReactiveFormsModule } from "@angular/forms";
import { SingleUserComponent } from './containers/single-user/single-user.component';
import { ListBrokerComponent } from './containers/list-broker/list-broker.component';
import { NewBrokerComponent } from './containers/new-broker/new-broker.component';
import { FormBrokerComponent } from './components/form-broker/form-broker.component';

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
    UsersPageComponent,
    ListUsersComponent,
    MatNewUserComponent,
    SingleUserComponent,
    ListBrokerComponent,
    NewBrokerComponent,
    FormBrokerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // NoopAnimationsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    DemoMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
