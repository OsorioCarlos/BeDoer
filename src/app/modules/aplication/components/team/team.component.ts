import { Component, OnInit } from '@angular/core';
import { fillTeams } from 'src/app/mockup.db';

/* Servicio*/
import { AuthService } from 'src/app/services/authentication/auth.service';
import { TeamService } from '../../../../services/team.service';

declare let $: any;

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  private identification: number;

  myTeams: object[];
  otherTeams: object[];

  teamName: string;
  teamDescription: string;

  constructor(private teamService: TeamService, private authService: AuthService) { }

  ngOnInit(): void {
    this.identification = this.authService.getIdentification();
    this.getTeams();
  }

  getTeams(): void {
    this.teamService.get(this.identification).subscribe(teams =>{
      this.myTeams = teams['data']['my_teams'];
      this.otherTeams = teams['data']['other_teams'];
    });
  }

  createTeam(): void {
    console.log(this.teamName);
    console.log(this.teamDescription);
    this.closeModal('create-team-modal');
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
