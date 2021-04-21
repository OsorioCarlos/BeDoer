import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../services/authentication/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public disableButton = false;
  user = {
    email: 'joel159@gmail.com',
    password: '1234567'
  };

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  autoLogin(): void {
    this.disableButton = true;
    this.authService.login(this.user);
  }

}
