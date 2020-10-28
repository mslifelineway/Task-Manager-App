import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  task : Task;
  title: string = "";
  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) {
   }

  ngOnInit(): void {
    //getting task details name by taskId to edit task
    this.route.params.subscribe((param: Params) => {
      if(param.taskId) {
        this.taskService.findTaskById(param.taskId).subscribe((taskResult: any) => {
          this.task = taskResult.result[0];
          this.title = this.task.title;
        });
      }
    });
  }

  //update task
  updateTask(taskTitle: string) {
    this.task.title = taskTitle;
    this.taskService.updateTask(this.task).subscribe((newTaskResult : any) => {
      this.router.navigate(['../list/' + this.task._listId ]);
    });
  }
}