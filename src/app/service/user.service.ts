import { Injectable } from '@angular/core';
interface userType {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userData: userType = {
    name: 'Pratik Suthar',
    email: 'pratiksuthar1020@gmail.com',
  };

  getCurrentUser(): userType {
    return this.userData;
  }
}
