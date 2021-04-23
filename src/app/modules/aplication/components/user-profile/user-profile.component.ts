import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// Services
import { UserService } from 'src/app/services/user.service';
import { AuthService } from '../../../../services/authentication/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user = {name: '', email: ''};

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.userService.get().subscribe(user => {
      this.user.name = user['data'].name;
      this.user.email = user['data'].email;
    });
  }

}
