import { DeclareVarStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { fillTask, CATEGORIES } from '../../mockup.db';

declare let $: any;

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
  tarea(){
    $('#tarea').modal();
  }
  etiqueta(){
    $('#etiqueta').modal();
  }
  salir()
  {
    setTimeout(() => {
      $('#tarea').modal('hide');
    },300);
  }

}
