import { Component, OnInit } from '@angular/core';
import { fillTeams } from 'src/app/mockup.db';
/* Servicio importado */
import { TeamService } from '../../services/team.service';




declare let $: any;

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams: string[] = [];

  team: any = [];

  constructor(private servicio: TeamService) { }

  ngOnInit(): void {
    this.getTeams();
    this.servicio.obtenerEquipos()
      .subscribe( resp =>{
          console.log(resp);
          this.team = resp.teams;
      }) ;
  };

    getTeams(): void {
    this.teams = fillTeams(5);
  }

  openCreateModal() {
    $('#modalCreateTeam').modal();
  }
  
  openEditModal() {
    $('#modalEditTeam').modal();
  }
}
