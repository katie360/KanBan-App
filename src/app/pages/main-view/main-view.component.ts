import { Component } from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.models';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent {
   ideas = [
    'Plan a weekend getaway',
    'Brainstorm project ideas',
    'Explore new recipes',
    'Create a reading list'
  ];

   research = [
    'Research vacation destinations',
    'Investigate project technologies',
    'Find healthy meal plans',
    'Read reviews of recommended books'
  ];

   todo = [
    'Finish presentation slides',
    'Buy groceries for the week',
    'Pay bills',
    'Call a friend'
  ];

   done = [
    'Completed work presentation',
    'Cooked a delicious dinner',
    'Organized personal finances',
    'Had a great conversation'
  ];


  // drop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(
  //       event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex,
  //     );
  //   }
  // }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Check if the source container still has items
      if (event.previousContainer.data.length > 0) {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
      }
    }
  }

}
