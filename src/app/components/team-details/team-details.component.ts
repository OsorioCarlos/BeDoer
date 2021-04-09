import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  members: object=[];

  constructor(private memberService: MemberService) { }
  
  ngOnInit(): void {
    this.getMembers();
  }

 getMembers(): void {
    this.memberService.get('members', 3).subscribe(members => {
      this.members = members['data']['users'];
    });
  }
}

