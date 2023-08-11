import { Injectable } from '@angular/core';
import { Column, Task } from 'src/app/models/task.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http: HttpClient) {}

  columns: Column[] = [];

  newItemTitle: string = '';
  newItemDescription: string = '';


  fetchTaskData(): Observable<Column[]> {
    return this.http.get<Column[]>('/assets/tasks.json');
  }

  drop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      // Update local storage or perform any other necessary actions
    }
  }
  addTask(column: Task[], newTask: Task): void {
    column.push(newTask);
  }

  deleteTask(column: Task[], index: number): void {
    column.splice(index, 1);
  }
}
