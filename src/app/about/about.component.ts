import { Component, inject } from '@angular/core';
import { UserService } from '../service/user.service';
import { UserListService } from '../service/user-list.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';

interface userType {
  name: string;
  email: string;
}

interface user {
  id: number;
  name: string;
  email: string;
}
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, UserFormComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  providers: [UserService],
})
export class AboutComponent {
  currentUser: userType = {} as userType;
  // private service = inject(UserService);
  userList: user[] = [];
  // private userListService = inject(UserListService);
  // constructor() {
  //   this.currentUser = this.service.getCurrentUser();
  //   this.userList = this.userListService.getUserList();
  //   console.log('About: ' + this.userListService.getUserList());
  // }

  constructor(
    private userService: UserService,
    private userListService: UserListService
  ) {
    this.currentUser = this.userService.getCurrentUser();
    this.userList = this.userListService.getUserList();
    console.log('About: ' + this.userListService.getUserList());
    console.log('About length: ' + this.userListService.getUserList().length);
  }

  // constructor(private userService: UserService) {
  //   this.currentUser = this.service.getCurrentUser();
  // }
}
