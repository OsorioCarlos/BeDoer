import {Component, OnDestroy, OnInit} from '@angular/core';
import {CategoryService} from 'src/app/services/category.service';
import {ToastrService} from 'ngx-toastr';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AplicationService} from '../../../../services/aplication/aplication.service';
import {Subscription} from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';


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
  public dataTasks = [];
  public totalStates;
  private idTask;
  private stateTask;
  public  subcription: Subscription;
  categories: object = [];

  // -------------------------------------------------------------------------------
  // Contructor e iniciador.
  // -------------------------------------------------------------------------------
  constructor(private categoryService: CategoryService,
              private appService: AplicationService,
              private toastrService: ToastrService,
              private formBuilder: FormBuilder,
              private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.createTaskForm = this.formBuilder.group({
      title: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(40)
      ]],
      description: [''],
      expiration_date: [''],
      state_id: ['', [
        Validators.required
      ]],
    });

    this.editTaskForm = this.formBuilder.group({
      title: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(40)
      ]],
      description: [''],
      expiration_date: [''],
      state_id: [''],
    });

    // this.getCategories();
    this.getTasks(1);
  }

  // -------------------------------------------------------------------------------
  // Getter de registerForm.
  // -------------------------------------------------------------------------------
  get registerState_id(): AbstractControl {
    return this.createTaskForm.get('state_id');
  }

  get editState_id(): AbstractControl {
    return this.editTaskForm.get('state_id');
  }

  // -------------------------------------------------------------------------------
  // Métodos del componente.
  // -------------------------------------------------------------------------------
  // getCategories(): void {
  //   this.categoryService.get().subscribe(res => {
  //     this.categories = res['data'];
  //   });
  // }

  // Métodos de lo modales.
  closeModal(name: string): void {
    const modal = document.getElementById(name);
    modal.style.display = 'none';
    this.createTaskForm.reset();
    this.editTaskForm.reset();
  }

  openModal(name: string, data?): void {
    const modal = document.getElementById(name);
    modal.style.display = 'block';

    if (data) {
      this.idTask = data.id;
      this.stateTask = data.state_id;

      this.editTaskForm.patchValue({
        title: data.title,
        description: data.description,
        expiration_date: data.expiration_date,
        state_id: data.state_id
      });
    }
  }

  // Métodos CRUD de las tareas.
  getTasks(state): void {
    this.spinner.show();
    this.appService.get(`user-tasks/index/${state}`).subscribe(
      res => {
        this.dataTasks = res.data;
        this.totalStates = res.totalStates;
        console.log(res.data);
        this.spinner.hide();
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
        this.spinner.hide();
        this.toastrService.error('error', 'Error con el servidor.', {
          timeOut: 2000,
          progressBar: true
        });
      }
    );
  }

  createTask(): void {
    console.log(this.createTaskForm.value);
    if (this.createTaskForm.valid) {
      this.appService.post('user-tasks', {
        title: this.createTaskForm.value.title,
        description: this.createTaskForm.value.description,
        expiration_date: this.createTaskForm.value.expiration_date,
        state_id: this.createTaskForm.value.state_id,
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
    } else {
      this.toastrService.info('Rellene el formulario formularios', 'Sin datos.', {
        timeOut: 2000,
        progressBar: true
      });
    }
    this.getTasks(this.createTaskForm.value.state_id);
    this.closeModal('create-task-modal');
  }

  editTask(): void {
    this.appService.put(`tasks/${this.idTask}`, {
      title: this.editTaskForm.value.title,
      description: this.editTaskForm.value.description,
      expiration_date: this.editTaskForm.value.expiration_date,
      state_id: this.editTaskForm.value.state_id,
    }).subscribe(
      res => {
        this.toastrService.success('', 'Tarea editada.', {
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
    this.getTasks(this.editTaskForm.value.state_id);
    this.closeModal('edit-task-modal');
  }

  deleteTask(): void {
    this.appService.delete(`tasks/${this.idTask}`).subscribe(
      res => {
        console.log('entre a lo bueno');
        this.toastrService.success('', 'Tarea eliminada.', {
          timeOut: 2000,
          progressBar: true
        });
      },
      error => {
        console.log('entre a lo malo');
        console.log(error);
        this.toastrService.error('Error con el servidor.', 'error al borrar', {
          timeOut: 2000,
          progressBar: true
        });
      }
    );
    this.closeModal('edit-task-modal');
    this.closeModal('deleted-task-modal');
    this.idTask = undefined;
    this.getTasks(this.stateTask);
  }

}
