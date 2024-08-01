import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  @Input() tasks: string[] = [];
  @Output() taskDeleted:EventEmitter<number> = new EventEmitter<number>();

  deleteTask(index: number){
    this.taskDeleted.emit(index)
  }
}
