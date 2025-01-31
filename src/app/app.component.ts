import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {ErrorMsgComponent} from './error-msg.component';
import {UserListComponent} from './user-list.component';
import {UserFormComponent} from './user-form.component';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="max-w-screen-sm mx-6 sm:mx-auto">
      <!--ALERT-->
        <app-error-msg [error]="userService.error()" />
      <!--form-->
      <app-user-form
        [activeUser]="userService.activeUser()"
        (saveUser)="userService.saveUser($event)"
        (resetActiveUser)="userService.resetActiveUser()"
      />
      <!--LIST-->
      <app-user-list
        [users]="userService.users()"
        [activeUser]="userService.activeUser()"
        (deleteUser)="userService.deleteUser($event)"
        (selectUser)="userService.selectUser($event)"
      />
    </div>
  `,

  imports: [
    ReactiveFormsModule,
    ErrorMsgComponent,
    UserListComponent,
    UserFormComponent
  ]
})
export class AppComponent implements OnInit {

  userService = inject(UserService);

  ngOnInit() {
    this.userService.loadUsers()
  }
}
