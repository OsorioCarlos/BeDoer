import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

declare let $: any;

@Component({
  selector: 'app-board-task-team',
  templateUrl: './board-task-team.component.html',
  styleUrls: ['./board-task-team.component.css']
})
export class BoardTaskTeamComponent implements OnInit {

  taskTitle: string;
  taskDescription: string;
  taskDate: Date;
  
  states: object = [];

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.getStates();
  }

  getStates(): void {
    this.stateService.get().subscribe(states => {
      this.states = states['data'];
    });
  }

  createTask(): void {
    console.log(this.taskTitle);
    console.log(this.taskDescription);
    console.log(this.taskDate);
    this.closeModal('create-task-modal');
  }

  openModal(name: string): void {
    let modal = document.getElementById(name);
    modal.style.display = 'block';
  }
  
  closeModal(name: string): void {
    let modal = document.getElementById(name);
    modal.style.display = 'none';
  }
}
