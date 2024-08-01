import { Component } from '@angular/core';
import { ToDoFormComponent } from "../to-do-form/to-do-form.component";
import { ToDoListComponent } from "../to-do-list/to-do-list.component";
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-to-do-wrapper',
  standalone: true,
  imports: [ToDoFormComponent, ToDoListComponent, AppComponent],
  templateUrl: './to-do-wrapper.component.html',
  styleUrl: './to-do-wrapper.component.css'
})
export class ToDoWrapperComponent {
  tasks: string[] = [];

  addTask(task: string): void {
    if (task) {
      this.tasks.push(task);
    }
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
