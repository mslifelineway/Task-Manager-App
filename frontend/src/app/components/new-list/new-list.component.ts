import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(private listService: ListService, private router: Router) { }

  ngOnInit(): void {
  }

  createList(title: string) {
    return this.listService.createList(title).subscribe((newList: any) => {
      console.log(newList);
      this.router.navigate(['../list/' + newList.result._id]);
    });
  }
}
