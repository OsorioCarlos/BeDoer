import { Component, OnInit } from '@angular/core';
import { fillTeams } from 'src/app/mockup.db';
declare let $: any;

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getTeams();
  }

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
