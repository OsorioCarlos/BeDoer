import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

declare let $: any;

@Component({
  selector: 'app-board-task-team',
  templateUrl: './board-task-team.component.html',
  styleUrls: ['./board-task-team.component.css']
})
export class BoardTaskTeamComponent implements OnInit {

  states: object = [];

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.getStates();
  }

  getStates(): void {
    this.stateService.get('states').subscribe(states => {
      this.states = states['data']['states'];
    });
  }

  tarea(){
    $('#tarea').modal();
  }
  salir()
  {
    setTimeout(() => {
      $('#tarea').modal('hide');
    },300);
  }
}
