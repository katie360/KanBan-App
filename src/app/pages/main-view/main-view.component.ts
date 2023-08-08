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

  isAddPopupVisible = false;
  isResearchPopupVisible = false;
  isIdeaPopupVisible = false;

  newItemTitle: string = '';
  newItemDescription: string = '';

  showAddPopup() {
    this.isAddPopupVisible = true;
  }
  showResearchPopup() {
    this.isResearchPopupVisible  = true;
  }
  showIdeaPopup() {
    this.isIdeaPopupVisible = true;
  }


  addIdea() {
    const newIdea: Task = {
      title: this.newItemTitle,
      description: this.newItemDescription,
    };
    this.ideas.push(newIdea);
    this.newItemTitle = '';
    this.newItemDescription = '';
    this.isIdeaPopupVisible = false;
  }

  //research colum

  addResearch(){
    const  newResearch:Task = {
      title:this.newItemTitle,
      description:this.newItemDescription
    }

    this.research.push(newResearch)
    this.newItemTitle = '';
    this.newItemDescription = '';
    this.isResearchPopupVisible = false;
  }

  //todo column

  addItem() {
    const newItem: Task = {
      title: this.newItemTitle,
      description: this.newItemDescription
    };

    this.todo.push(newItem);

    this.newItemTitle = '';
    this.newItemDescription = '';
    this.isAddPopupVisible = false;
  }


  deleteItem(column: Task[], index: number) {
    column.splice(index, 1);
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
