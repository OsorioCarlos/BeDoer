import { Component, OnInit } from '@angular/core';
import { fillTeams } from 'src/app/mockup.db';
/* Servicio*/
import { TeamService } from '../../../../services/team.service';

declare let $: any;

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  myTeams: object[];
  otherTeams: object[];

  teamName: string;
  teamDescription: string;

  constructor(private teamSercive: TeamService) { }

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam(): void {
    this.teamSercive.get(2).subscribe(teams =>{
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
