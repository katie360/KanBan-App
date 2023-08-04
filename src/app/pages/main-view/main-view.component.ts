import { Component } from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Task } from 'src/app/models/task.model';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent {
  ideas: Task[] = [
    { title: 'weekend getaway' },
    { title: 'project ideas' },
    { title: 'new recipes' },
    { title: 'reading list' }
  ];

  research: Task[] = [
    { title: 'vacation destinations' },
    { title: 'project technologies' },
    { title: 'meal plans' },
    { title: 'Read reviews' }
  ];

  todo: Task[] = [
    { title: 'presentation slides' },
    { title: 'Buy groceries' },
    { title: 'Pay bills' },
    { title: 'Call a friend' }
  ];

  done: Task[] = [
    { title: 'work presentation' },
    { title: 'delicious dinner' },
    { title: 'personal finances' },
    { title: 'conversation' }
  ];

  addIdea() {
    const newIdea: Task = {
      title: 'New Idea',
      description: 'Description here'
    };
    this.ideas.push(newIdea);
    // Update local storage
  }
  addResearch() {
    const newResearch: Task = {
      title: 'New Research',
      description: 'Description here'
    };
    this.research.push(newResearch);
    // Update local storage
  }
  addItem() {
    const newItem: Task = {
      title: 'New Item',
      description: 'Description here'
    };
    this.todo.push(newItem);
    // Update local storage
  }


  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Handle transferring tasks between columns
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      // Update local storage
    }
  }


}
