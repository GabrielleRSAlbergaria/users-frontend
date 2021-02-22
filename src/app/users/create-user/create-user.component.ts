import { Component, OnInit } from '@angular/core';
import { RequestUser, ResponseUser } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  request: RequestUser = {
    username: '',
    password: '',
    name: '',
    surname: '',
    email: '',
    phone: ''
  };

  response!: ResponseUser;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  save(): void{
    this.userService.createUser(this.request).subscribe(res => {
      this.response = res;
    });
  }

}
