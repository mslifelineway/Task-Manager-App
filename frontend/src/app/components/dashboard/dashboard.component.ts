import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  lists: [];
  tasks: [];
  selectedListId: string;
  selectedList: List;

  deletedTaskId: string ;

  constructor(private listService: ListService, private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    //let's find all the lists and task of a selected list

    this.listService.getLists().subscribe((listResult: any) => {
      this.lists = listResult.result;
    });

    //find all the tasks of a selected list
    this.route.params.subscribe((param: Params) => {
      if (param.listId) {
        this.selectedListId = param.listId;
        this.taskService.getTasks(param.listId).subscribe((taskResult: any) => {
          this.tasks = taskResult.result;
        });
      } else {
        this.tasks = undefined;
      }
    });
  }

  //task on click
  taskOnClick(task: Task) {
    this.taskService.onTaskClick(task).subscribe((newTask: any) => {
      task.completed = task.completed;
    });
  }


  //delete the task by id
  deleteTask(taskId: string) {
    this.taskService.deleteTask(taskId).subscribe((deletedTaskResult: any) => {
      window.location.reload();
    });

  }

  //delete list and it's all the tasks
  deleteList() {
    this.listService.deleteList(this.selectedListId).subscribe((removedListResult: any) => {
      this.router.navigate(['/']);
    });
  }
}
