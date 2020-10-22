import { Component, OnInit } from '@angular/core';
import {fillMembers} from 'src/app/mockup.db';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  members: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void {
    this.members = fillMembers(5);
  }

}
