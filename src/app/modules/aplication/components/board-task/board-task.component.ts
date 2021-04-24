import {Component, OnInit} from '@angular/core';
import {CategoryService} from 'src/app/services/category.service';
import {ToastrService} from 'ngx-toastr';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AplicationService} from '../../../../services/aplication/aplication.service';


@Component({
  selector: 'app-board-task',
  templateUrl: './board-task.component.html',
  styleUrls: ['./board-task.component.css']
})
export class BoardTaskComponent implements OnInit {

  // -------------------------------------------------------------------------------
  // Atributos de la clase.
  // -------------------------------------------------------------------------------
  public createTaskForm: FormGroup;
  public editTaskForm: FormGroup;
  public dataTasks;
  public totalStates;
  private idTask;
  categories: object = [];

  // -------------------------------------------------------------------------------
  // Contructor e iniciador.
  // -------------------------------------------------------------------------------
  constructor(private categoryService: CategoryService,
              private appService: AplicationService,
              private toastrService: ToastrService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.createTaskForm = this.formBuilder.group({
      title: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(40)
      ]],
      description: [''],
      expiration_date: ['']
    });

    this.editTaskForm = this.formBuilder.group({
      title: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(40)
      ]],
      description: [''],
      expiration_date: ['']
    });
    this.getCategories();
    this.getTasks(1);
  }

  // -------------------------------------------------------------------------------
  // Métodos del componente.
  // -------------------------------------------------------------------------------
  getCategories(): void {
    this.categoryService.get().subscribe(res => {
      this.categories = res['data'];
    });
  }

  // Métodos de lo modales.
  closeModal(name: string): void {
    const modal = document.getElementById(name);
    modal.style.display = 'none';
    this.createTaskForm.reset();
    this.editTaskForm.reset();
  }

  openModal(name: string): void {
    const modal = document.getElementById(name);
    modal.style.display = 'block';
  }

  openEditModal(name: string, data): void {
    const modal = document.getElementById(name);
    modal.style.display = 'block';

    this.idTask = data.id;

    this.editTaskForm.patchValue({
      title: data.title,
      description: data.description,
      expiration_date: data.expiration_date,
      state_id: data.state_id
    });
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

  createTask(): void {
    console.log(this.createTaskForm.value);
    this.appService.post('user-tasks', {
      title: this.createTaskForm.value.title,
      description: this.createTaskForm.value.description,
      expiration_date: this.createTaskForm.value.expiration_date,
      state_id: 1,
    }).subscribe(
      res => {
        this.toastrService.success('', 'Tarea creada.', {
          timeOut: 2000,
          progressBar: true
        });
      },
      error => {
        console.log(error);
        this.toastrService.error('error', 'Error con el servidor.', {
          timeOut: 2000,
          progressBar: true
        });
      }
    );
    this.closeModal('create-task-modal');
  }

  editTask(): void {
    this.appService.put(`tasks/${this.idTask}`, {
      title: this.editTaskForm.value.title,
      description: this.editTaskForm.value.description,
      expiration_date: this.editTaskForm.value.expiration_date,
      state_id: 1,
    }).subscribe(
      res => {
        this.toastrService.success('', 'Tarea creada.', {
          timeOut: 2000,
          progressBar: true
        });
      },
      error => {
        console.log(error);
        this.toastrService.error('Error con el servidor.', 'error', {
          timeOut: 2000,
          progressBar: true
        });
      }
    );
    this.idTask = undefined;
  }

}
