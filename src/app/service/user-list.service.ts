import { Injectable } from '@angular/core';
interface User {
  id: number;
  name: string;
  email: string;
}
@Injectable({
  providedIn: 'root',
})
export class UserListService {
  constructor() {}

  private userList: User[] = [
    { id: 1, name: 'Virat Kohli', email: 'virat@gmail.com' },
    { id: 2, name: 'MS Dhoni', email: 'msdhoni@gmail.com' },
    { id: 3, name: 'Rohit Sharma', email: 'rohit@gmail.com' },
    { id: 4, name: 'Jasprit Bumrah', email: 'jasprit@gmail.com' },
    { id: 5, name: 'Ravindra Jadeja', email: 'jadeja@gmail.com' },
    { id: 6, name: 'Ajinkya Rahane', email: 'ajinkya@gmail.com' },
    { id: 7, name: 'Cheteshwar Pujara', email: 'cheteshwar@gmail.com' },
    { id: 8, name: 'Hardik Pandya', email: 'hardik@gmail.com' },
    { id: 9, name: 'Shikhar Dhawan', email: 'shikhar@gmail.com' },
    { id: 10, name: 'KL Rahul', email: 'klrahul@gmail.com' },
    { id: 11, name: 'Rishabh Pant', email: 'rishabh@gmail.com' },
    { id: 12, name: 'Bhuvneshwar Kumar', email: 'bhuvneshwar@gmail.com' },
    { id: 13, name: 'Ishant Sharma', email: 'ishant@gmail.com' },
    { id: 14, name: 'Mohammed Shami', email: 'shami@gmail.com' },
    { id: 15, name: 'Umesh Yadav', email: 'umesh@gmail.com' },
    { id: 16, name: 'Kuldeep Yadav', email: 'kuldeep@gmail.com' },
    { id: 17, name: 'Yuzvendra Chahal', email: 'chahal@gmail.com' },
    { id: 18, name: 'Shubman Gill', email: 'shubman@gmail.com' },
    { id: 19, name: 'Mayank Agarwal', email: 'mayank@gmail.com' },
    { id: 20, name: 'Washington Sundar', email: 'washington@gmail.com' },
    { id: 21, name: 'Axar Patel', email: 'axar@gmail.com' },
    { id: 22, name: 'Hanuma Vihari', email: 'hanuma@gmail.com' },
    { id: 23, name: 'Shardul Thakur', email: 'shardul@gmail.com' },
    { id: 24, name: 'Prithvi Shaw', email: 'prithvi@gmail.com' },
    { id: 25, name: 'Rahul Chahar', email: 'rahulchahar@gmail.com' },
  ];
  getUserList(): User[] {
    return this.userList;
  }
}
