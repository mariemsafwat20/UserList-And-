import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule, ButtonModule, InputTextModule, NgFor, NgStyle],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  value:string = '';

  usersArray: Array<any> = [
    {
      "id":	1,
      "profile":	"assets/imgs/avatar.png",
      "username":	"Bret",
      "email":	"Sincere@april.biz",
      "phone":	"1-770-736-8031 x56442",
      "isAdmin": true,
    },
    {
      "id":	2,
      "profile":	"assets/imgs/avatar.png",
      "name":	"Ervin Howell",
      "username":	"Antonette",
      "email":	"Shanna@melissa.tv",
      "phone":	"010-692-6593 x09125",
      "isAdmin": false,
    },
    {
      "id":	3,
      "profile":	"assets/imgs/avatar.png",
      "name":	"Clementine Bauch",
      "username":	"Samantha",
      "email":	"Nathan@yesenia.net",
      "phone":	"1-463-123-4447",
      "isAdmin": false,
    },
    {
      "id":	4,
      "profile":	"assets/imgs/avatar.png",
      "name":	"Clementine Bauch",
      "username":	"Samantha",
      "email":	"Nathan@yesenia.net",
      "phone":	"1-463-123-4447",
      "isAdmin": false,
    }
  ]
}
