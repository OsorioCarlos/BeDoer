import { Component, OnInit } from '@angular/core';
import { fillTeams } from 'src/app/mockup.db';
/* Servicio*/
import { TeamService } from '../../services/team.service';

declare let $: any;

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  /* teams: string[] = []; */

  teams: object = [];

  constructor(private teamSercive: TeamService) { 

      
  }

  ngOnInit(): void {
    /* this.getTeams(); */
    this.getTeam();
   
  };

  getTeam(): void{
    this.teamSercive.get('teams').subscribe(teams =>{
      this.teams = teams['data'];
    });
  }

/*     getTeams(): void {
    this.teams = fillTeams(5);
  } */

  openCreateModal() {
    $('#modalCreateTeam').modal();
  }
  
  openEditModal() {
    $('#modalEditTeam').modal();
  }




}
