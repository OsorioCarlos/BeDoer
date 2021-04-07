import { Component, OnInit } from '@angular/core';
import {fillMembers} from 'src/app/mockup.db';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  members: string[] = [];
  miembros:any;

  constructor(private membersService: MembersService) { }
  
  ngOnInit(): void {
    this.getMembers();
    this.getM();
  }

  getMembers(): void {
    this.members = fillMembers(5);
  }

  getM(): void {
    this.membersService.get('members', 3).subscribe(miembros => {
      this.miembros = miembros['data'];
      console.log(this.miembros);
    });
  }
}

