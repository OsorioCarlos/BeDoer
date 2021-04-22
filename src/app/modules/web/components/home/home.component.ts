import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../services/authentication/auth.service';
import {map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public disableButton = false;
  user = {
    email: 'joel@test.com',
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
