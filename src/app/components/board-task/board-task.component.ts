import { Component, OnInit } from '@angular/core';
import { fillTask, CATEGORIES } from '../../mockup.db';

@Component({
  selector: 'app-board-task',
  templateUrl: './board-task.component.html',
  styleUrls: ['./board-task.component.css']
})
export class BoardTaskComponent implements OnInit {

  tasks = [];
  categories = [];

  constructor() {
      this.tasks = fillTask(20);
   }

  ngOnInit(): void {

    console.log(`tareas = ${JSON.stringify(this.tasks)}`);
    //this.getCategories();

  }

  getCategories(): void {
    this.categories = CATEGORIES;
  }

}


