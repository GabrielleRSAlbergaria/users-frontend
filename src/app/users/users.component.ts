import { Component, OnInit } from '@angular/core';
import { ResponseUser, ResponseUsers } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  responseUsers!: ResponseUsers;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers()
    .subscribe(res => this.responseUsers = res);
  }

}
