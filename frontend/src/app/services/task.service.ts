import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Task } from 'src/app/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webRequestService: WebRequestService) { }

  //get all the tasks of a list
  getTasks(listId: string) {
    return this.webRequestService.get("list/" + listId + "/tasks");
  }

  //add new task
  createTask(title: string, listId : string) {
    return this.webRequestService.post("list/" + listId + "/tasks", {title, listId});
  }

  //on task click (update task completed: true or false)
  onTaskClick(task: Task) {
    task.completed = !task.completed;
    return this.webRequestService.patch("tasks/", {task});
  }

  //find task by id
  findTaskById(taskId: string) {
    return this.webRequestService.get("tasks/" + taskId);
  }

  //udpate task
  updateTask(task: Task) {
    return this.webRequestService.patch("tasks/" , {task});
  }

  //delete a task
  deleteTask(taskId: string) {
    return this.webRequestService.delete("tasks/" + taskId);
  }
  
}
