import { Component, OnInit } from '@angular/core';
import { fillTask, CATEGORIES } from '../../mockup.db';

declare let $: any;

@Component({
  selector: 'app-board-task',
  templateUrl: './board-task.component.html',
  styleUrls: ['./board-task.component.css']
})
export class BoardTaskComponent implements OnInit {

  editCategories = false;
  tasks = [];
  categories = [];

  tasksToDo = [];
  tasksDoing = [];
  tasksDone = [];


  constructor() {
    this.tasks = fillTask(150);
    //console.log(JSON.stringify(this.tasks));
  }

  ngOnInit(): void {
    
    this.getCategories();
    this.getTasks();  

  }

  getCategories(): void {
    this.categories = CATEGORIES;
  }

  openCreateModal() {
    $('#modalCreateTask').modal();
  }

  openEditModal() {
    $('#modalEditTask').modal();
  }

  openSeeModalTag()
  {
    $('#modalSeeTag').modal();
  }

  getTasks() {

    for (const task of this.tasks) {
      if (task.state == 1) {
        this.tasksToDo.push(task);
      } else if (task.state == 2) {
        this.tasksDoing.push(task);
      } else {
        this.tasksDone.push(task);
      }
    }

  }

  createTask(task) {
    let newTask = {
      "id": this.tasks.length + 1,
      "created_by": null,
      "teamspace": null,
      "title": task.title,
      "description": task.description,
      "is_delete": false,
      "state": "1",
      "expiration_date": "13/11/20",
      "create_at": null,
      "update_at": null
    }

    this.tasksToDo.push(newTask);
  }

  updateTask(oldTask) {
  
    let auxiliar;

    for (const task of this.tasks) {
      if (task.id === oldTask.id) {
        auxiliar = task
      }
    }

    auxiliar.title = oldTask.title;
    auxiliar.description = oldTask.description;

  }

}
