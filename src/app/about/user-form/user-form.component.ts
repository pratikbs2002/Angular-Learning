import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormsModule,
  FormControl,
  FormControlName,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserListService } from '../../service/user-list.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
  providers: [UserListService],
})
export class UserFormComponent {
  formValue: any;
  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });
  private userListService = inject(UserListService);

  submitUserForm = () => {
    this.formValue = this.userForm.value;
    console.log(this.formValue);
    this.userListService.addUser(this.formValue);
    console.log(this.userListService.getUserList());
  };
}
