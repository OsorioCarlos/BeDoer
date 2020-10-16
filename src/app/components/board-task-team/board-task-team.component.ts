import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-board-task-team',
  templateUrl: './board-task-team.component.html',
  styleUrls: ['./board-task-team.component.css']
})
export class BoardTaskTeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
