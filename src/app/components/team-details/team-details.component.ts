import { Component, OnInit } from '@angular/core';
import {fillMembers} from 'src/app/mockup.db';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  members: object=[];

  constructor(private membersService: MembersService) { }
  
  ngOnInit(): void {
    this.getMembers();
  }

 getMembers(): void {
    this.membersService.get('members', 3).subscribe(members => {
      this.members = members['data']['users'];
    });
  }
}

