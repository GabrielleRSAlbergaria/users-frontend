import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(private userService: UserService, private route: ActivatedRoute) { }
  id!: string;
  request!: User;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('email') || '';
    this.userService.getUser(this.id).subscribe(res => {
      this.request = {
        username: res.user.username,
        password: res.user.password,
        name: res.user.name,
        surname: res.user.surname,
        email: res.user.email,
        phone: res.user.phone,
        register_date: res.user.register_date,
        is_enabled: res.user.is_enabled
      };
    });
  }
  delete(): void{
    this.userService.deleteUser(this.id).subscribe(res => {
      alert('Removido com sucesso!');
    });
  }

}
