import { Component, OnInit } from '@angular/core';
import { NOTIFICATIONS } from 'src/app/mockup.db';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  notifications: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getNotifications(): void {
    this.notifications = NOTIFICATIONS;
  }

}
