import { Component, OnInit } from '@angular/core';

// Services
import { TeamService } from 'src/app/services/team.service';


declare let $: any;

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  myTeams: object[];
  otherTeams: object[];

  constructor(private teamSercive: TeamService) { 

      
  }

  ngOnInit(): void {
    this.getTeam();
  };

  getTeam(): void {
    this.teamSercive.get(1).subscribe(teams =>{
      this.myTeams = teams['data']['my_teams'];
      this.otherTeams = teams['data']['other_teams'];
    });
  }

  openCreateModal() {
    $('#modalCreateTeam').modal();
  }
  
  openEditModal() {
    $('#modalEditTeam').modal();
  }




}
