import { Component, OnInit } from '@angular/core';
import { RequestUser } from '../user.model';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id!: string;
  request!: RequestUser;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('email') || '';
    this.userService.getUser(this.id).subscribe(res => {
      this.request = {
        username: res.user.username,
        password: res.user.password,
        name: res.user.name,
        surname: res.user.surname,
        email: res.user.email,
        phone: res.user.phone
      };
    });
  }

  update(): void{
    this.userService.updateUser(this.id, this.request).subscribe(res => {
      alert ('Atualizado!');
    });
  }
}
