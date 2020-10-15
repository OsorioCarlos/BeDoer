import { Component, OnInit } from '@angular/core';
import { fillTask } from '../../mockup.db';

@Component({
  selector: 'app-board-task',
  templateUrl: './board-task.component.html',
  styleUrls: ['./board-task.component.css']
})
export class BoardTaskComponent implements OnInit {

  tasks = [];

  constructor() {
      this.tasks = fillTask(20);
   }

  ngOnInit(): void {

    console.log(`tareas = ${JSON.stringify(this.tasks)}`);

  }

}
