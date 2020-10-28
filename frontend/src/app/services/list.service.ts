import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { List } from 'src/app/models/list.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private webRequestService: WebRequestService) { }

  //get all the list
  getLists() {
    return this.webRequestService.get('lists');
  }

  //create a list
  createList(title: string) {
    return this.webRequestService.post("lists", {title});
  }

  //get list by id
  getListById(listId: string) {
    return this.webRequestService.get("lists/" + listId);
  }

  //update list
  updateList(list: List) {
    return this.webRequestService.patch("lists/" + list._id, {list});
  }

  //delete lists
  deleteList(listId: string) {
    return this.webRequestService.delete("lists/"+ listId);
  }
}
