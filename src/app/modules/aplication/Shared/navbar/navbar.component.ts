import {Component, OnInit} from '@angular/core';
import {NOTIFICATIONS} from 'src/app/mockup.db';
import {AuthService} from '../../../../services/authentication/auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  notifications: string[];

  constructor(private authService: AuthService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
  
  }

  getNotifications(): void {
    this.notifications = NOTIFICATIONS;
  }

  /* menu de interacción */
  showMenu(): void {
    let ancla = document.getElementsByClassName('nav-item');
    for (let i = 0; i < ancla.length; i++) {
      ancla[i].classList.toggle('ghost');
    }
  }

  logout(): void{
    this.authService.logout();
    this.toastrService.success('Esperamos verte de vuelta', 'Suerte.', {
      timeOut: 1300,
      progressBar: true
    });
  }
}
