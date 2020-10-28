import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent implements OnInit {
  list : List;
  title: string = "";
  constructor(private route: ActivatedRoute, private listService: ListService, private router: Router) {
   }

  ngOnInit(): void {
    //getting list name by listId to edit list name
    this.route.params.subscribe((param: Params) => {
      if(param.listId) {
        // this.list._id = param.list._id;
        this.listService.getListById(param.listId).subscribe((listResult: any) => {
          this.list = listResult.result[0];
          this.title = this.list.title;
        });
      }
    });
  }

  //update list
  updateList(listTitle: string) {
    this.list.title = listTitle;
    this.listService.updateList(this.list).subscribe((newList : any) => {
      this.router.navigate(['../list/' + this.list._id]);
    });
  }
}
