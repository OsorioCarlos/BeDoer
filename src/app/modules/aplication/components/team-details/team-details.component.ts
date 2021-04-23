import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { Location } from '@angular/common';

// Servicios
import { MemberService } from 'src/app/services/member.service';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  private memberSelected: any;
  
  team = { id: 0, name: '', description: ''}

  leader: number;
  
  userEmail: string;
  members: object[];

  constructor(
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private memberService: MemberService,
    private teamService: TeamService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.getMembers();
  }

  getUser(): void {
    this.userService.get().subscribe(user => {
      this.leader = user['data'].id;
    });
  }

  getMembers(): void {
    this.spinner.show();
    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    this.memberService.get(id).subscribe(data => {
      this.team.id = data['data']['team'].id;
      this.team.name = data['data']['team'].name;
      this.team.description = data['data']['team'].description;
      this.members = data['data']['members'];
      this.spinner.hide();
    });
  }

  addUser(): void {
    this.spinner.show();
    this.memberService.post({team_id: this.team.id, user_email: this.userEmail}).subscribe(() => {
      this.closeModal('add-user-modal');
      this.spinner.hide();
      this.getMembers();
    });
    this.userEmail = '';
  }

  deleteUser(member?: object): void {
    if (member) {
      this.memberSelected = member;
      this.openModal('delete-user-modal');
    }
    else {
      this.spinner.show();
      this.memberService.put({team_id: this.team.id, user_id: this.memberSelected.id}).subscribe(() => {
        this.closeModal('delete-user-modal');
        this.spinner.hide();
        this.getMembers();
      });
    }
  }

  updateTeam(): void {
    this.spinner.show();
    this.teamService.put(this.team).subscribe(() => {
      this.spinner.hide();
    });
  }

  deleteTeam(): void {
    this.teamService.delete(this.team.id).subscribe(msg => {
      console.log(msg);
      this.closeModal('delete-team-modal');
      this.router.navigate(['/app/equipos']);
    });
  }

  openModal(name: string): void {
    const modal = document.getElementById(name);
    modal.style.display = 'block';
  }

  closeModal(name: string): void {
    const modal = document.getElementById(name);
    modal.style.display = 'none';
  }
}

