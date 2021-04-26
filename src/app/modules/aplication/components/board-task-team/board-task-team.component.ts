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
  public teamId;
  public dataTasks;
  public totalStates;

  taskTitle: string;
  taskDescription: string;
  taskDate: Date;
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
    this.getTasks();
    this.teamId = this.route.snapshot.paramMap.get('id');
    console.log(this.teamId);
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
    const modal = document.getElementById(name);
    modal.style.display = 'block';
  }

  closeModal(name: string): void {
    const modal = document.getElementById(name);
    modal.style.display = 'none';
  }

  // Métodos CRUD de las tareas.
  getTasks(): void {
    this.appService.get(`team-tasks/${this.teamId}`).subscribe(
      res => {
        this.dataTasks = res.data;
        // this.totalStates = res.totalStates;
        console.log(res.data);
        if (this.dataTasks.length === (0 || null)) {
          this.toastrService.info('Has click en <strong>&quot;crear&quot;</strong> para crear una tarea', 'Sin tareas.', {
            progressBar: true,
            closeButton: true,
            enableHtml: true,
            timeOut: 4000
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
