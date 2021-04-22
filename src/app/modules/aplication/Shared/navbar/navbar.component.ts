import {Component, OnInit} from '@angular/core';
import {NOTIFICATIONS} from 'src/app/mockup.db';
import {AuthService} from '../../../../services/authentication/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  notifications: string[];

  constructor(private authService: AuthService) {
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
  }
}
