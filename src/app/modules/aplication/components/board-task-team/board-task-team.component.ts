import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CategoryService } from '../../../../services/category.service';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AplicationService } from '../../../../services/aplication/aplication.service';

declare let $: any;

@Component({
  selector: 'app-board-task-team',
  templateUrl: './board-task-team.component.html',
  styleUrls: ['./board-task-team.component.css']
})
export class BoardTaskTeamComponent implements OnInit {

   // -------------------------------------------------------------------------------
  // Atributos de la clase.
  // -------------------------------------------------------------------------------

  taskTitle: string;
  taskDescription: string;
  taskDate: Date;
  public dataTasks;
  public totalStates;
  categories: object = [];

  // -------------------------------------------------------------------------------
  // Contructor e iniciador.
  // -------------------------------------------------------------------------------

  constructor(
    private categoryService: CategoryService,
    private appService: AplicationService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  // -------------------------------------------------------------------------------
  // Métodos del componente.
  // -------------------------------------------------------------------------------
  getCategories(): void {
    this.categoryService.get().subscribe(res => {
      this.categories = res['data'];
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

  // Métodos CRUD de las tareas.
  getTasks(state): void {
    this.appService.get(`user-tasks/index/${state}`).subscribe(
      res => {
        this.dataTasks = res.data;
        console.log(this.dataTasks);
        this.totalStates = res.totalStates;
        if (res.data === null) {
          this.toastrService.info('¿Quieres crear una tarea?', 'Sin tareas.', {
            disableTimeOut: true,
            progressBar: true,
            closeButton: true
          });
        }
      },
      error => {
        console.log(error);
        this.toastrService.error('error', 'Error con el servidor.', {
          timeOut: 2000,
          progressBar: true
        });
      }
    );
  }
}
