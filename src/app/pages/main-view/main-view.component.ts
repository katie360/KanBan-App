import { Component,Output,EventEmitter ,OnInit} from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { TaskServiceService } from 'src/app/services/task-services/task-service.service';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent  {

constructor(private _taskService :TaskServiceService){}

  // ngOnInit(){
  //     this._taskService.fetchTaskData()
  //     .subscribe( data =>
  //                 {this._taskService.columns = data;
  //                 });
  // }

  // selectedTask: Task | null = null;
  // showDetailsPopup = false;

  // showDetails(task: Task): void {
  //   this.selectedTask = task;
  //   this.showDetailsPopup = true;
  // }



}
