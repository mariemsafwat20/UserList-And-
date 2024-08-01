import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-to-do-form',
  standalone: true,
  imports: [ButtonModule, InputTextModule, FormsModule],
  templateUrl: './to-do-form.component.html',
  styleUrl: './to-do-form.component.css'
})
export class ToDoFormComponent {
  task:string = '';

  @Output() taskAdded: EventEmitter<string> = new EventEmitter<string>();

  addTask(){
    if(this.task.trim()){
      this.taskAdded.emit(this.task);
      this.task = '';
    }
  }
}
