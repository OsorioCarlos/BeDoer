import { Component, OnInit } from '@angular/core';
import { fillTask, CATEGORIES, Task, I_Task } from '../../mockup.db';

declare let $: any;

@Component({
  selector: 'app-board-task',
  templateUrl: './board-task.component.html',
  styleUrls: ['./board-task.component.css']
})
export class BoardTaskComponent implements OnInit {

  // -------------------------------------------------------------------------------
  // Atributos de la clase.
  // -------------------------------------------------------------------------------

  edit = true;
  tasks: I_Task[] = [];
  categories = [];

  editableTask: I_Task = new Task();
  tasksToDo: I_Task[] = [];
  tasksDoing: I_Task[] = [];
  tasksDone: I_Task[] = [];

  // -------------------------------------------------------------------------------
  // Métodos del componente.
  // -------------------------------------------------------------------------------
  constructor() { }

  ngOnInit(): void {
    this.tasks = fillTask(100);
    this.getCategories();
    this.getTasks();
  }

  // -------------------------------------------------------------------------------
  // Métodos de lo modales.
  // -------------------------------------------------------------------------------

  openCreateModal() {
    $('#modalCreateTask').modal('show');
    $('.toast').toast('show');
  }

  openEditModal(task) {
    $('#modalEditTask').modal('show');
    // this.updateTask(task);
  }

  openConfirmModal() {
    $('#confirmDeleteModal').modal('show');
  }

  // -------------------------------------------------------------------------------
  // Métodos CRUD de las tareas.
  // -------------------------------------------------------------------------------

  getTasks() {

    this.tasksToDo = [];
    this.tasksDoing = [];
    this.tasksDone = [];

    for (const task of this.tasks) {
      if (task.state == '1') {
        this.tasksToDo.push(task);
      } else if (task.state == '2') {
        this.tasksDoing.push(task);
      } else {
        this.tasksDone.push(task);
      }
    }

  }

  createTask(title, description, expiration_date) {

    let newTask: I_Task = new Task();

    newTask.id = this.tasks.length+1;
    newTask.title = title;
    newTask.description = description;
    newTask.expiration_date = expiration_date;
    newTask.state = '1';

    this.tasks.push(newTask);
    this.getTasks();
    $('#modalCreateTask').modal('hide');
  }

  updateStateTask(task) {
    console.log(task);
    if (task.state == '1') {
      task.state = '2';
      this.getTasks();
    } else if (task.state == '2') {
      task.state = '3';
      this.getTasks();
    } else {
      task.state = '1';
      this.getTasks();
    }

  }

  // updateTask(task) {
  //   let editableTask: Task = new Task();

  //   editableTask.title = title;
  //   editableTask.description = description;
  //   editableTask.expiration_date = expiration_date;
  //   editableTask.state = '1';

  // }

  // -------------------------------------------------------------------------------
  // Métodos para las categorias.
  // -------------------------------------------------------------------------------

  getCategories(): void {
    this.categories = CATEGORIES;
  }

}
