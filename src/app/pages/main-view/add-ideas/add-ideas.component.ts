import { TaskServiceService } from 'src/app/services/task-services/task-service.service';
import { Component,OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'add-ideas',
  templateUrl: './add-ideas.component.html',
  styleUrls: ['./add-ideas.component.css']
})
export class AddIdeasComponent implements OnInit {
  constructor(private _taskService :TaskServiceService){}
  ngOnInit(): void {
    this._taskService.fetchTaskData().subscribe(
      (data=>{this._taskService.columns = data})
    );
}

  columns = this._taskService.columns;
  newItemTitle =this._taskService.newItemTitle;
  newItemDescription = this._taskService.newItemDescription;


  isIdeaPopupVisible = false;

  showIdeaPopup() {
    this.isIdeaPopupVisible = true;
  }
  hideIdeaPopup(){
    this.isIdeaPopupVisible = false;
  }

  //add task

  addIdea(){
    const newIdea:Task = {
      title:this._taskService.newItemTitle,description:this._taskService.newItemDescription
    };
    this._taskService.columns[0].tasks.push(newIdea);
    this._taskService.newItemTitle = '';
    this._taskService.newItemDescription = '';
    this. isIdeaPopupVisible = false;
  }

  //delete task

  deleteIdea(index: number): void {
    this._taskService.columns[0].tasks.splice(index, 1);
  }

  //drag and drop method

  drop(event: any): void {

    const prevIndex = this._taskService.columns[0].tasks.findIndex((task: Task) => task === event.item.data);
    const currentIndex = event.currentIndex;

    this._taskService.columns[0].tasks.splice(prevIndex, 1);
    this._taskService.columns[0].tasks.splice(currentIndex, 0, event.item.data);
  }



}
