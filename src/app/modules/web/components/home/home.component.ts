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

  constructor() {
  }

  ngOnInit(): void {
  }


}
