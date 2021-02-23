import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './containers/main/main.component';
import { NewNoteComponent } from './containers/new-note/new-note.component';
import { NewUserComponent } from './containers/new-user/new-user.component';
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

  // {
  //   path: 'newNote',
  //   component: NewNoteComponent
  // },
  // {
  //   path: 'editNote/:id',
  //   component: NewNoteComponent
  // },
  {
    path: 'newUser',
    component: NewUserComponent
  },
  {
    path: 'editUser/:id',
    component: NewUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
