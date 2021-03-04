import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatNewUserComponent } from './components/mat-new-user/mat-new-user.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { ListBrokerComponent } from './containers/list-broker/list-broker.component';
import { ListUsersComponent } from './containers/list-users/list-users.component';
import { MainComponent } from './containers/main/main.component';
import { NewBrokerComponent } from './containers/new-broker/new-broker.component';
import { NewNoteComponent } from './containers/new-note/new-note.component';
import { NewUserComponent } from './containers/new-user/new-user.component';
import { SingleUserComponent } from './containers/single-user/single-user.component';
import { UsersPageComponent } from './containers/users-page/users-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'usersPage',
    component: UsersPageComponent
  },
  {
    path: 'singleUser/:id',
    component: SingleUserComponent
  },
  {
    path: 'listUsers',
    component: ListUsersComponent
  },

  {
    path: 'newUser',
    component: NewUserComponent
  },
  {
    path: 'editUser/:id',
    component: NewUserComponent
  },
  {
    path: 'matNewUser',
    component: MatNewUserComponent
  },
  {
    path: 'listBrokers',
    component: ListBrokerComponent
  },
  {
    path: 'newBroker',
    component: NewBrokerComponent
  },
  {
    path: 'editBroker/:id',
    component: NewBrokerComponent
  },

  // {
  //   path: 'newNote',
  //   component: NewNoteComponent
  // },
  // {
  //   path: 'editNote/:id',
  //   component: NewNoteComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
