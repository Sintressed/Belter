import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products;
  constructor(private _taskService: TaskService) { }
  onRedirect(){
    this._taskService.redirect(['products', 'new'])
  }
  onEdit(id){
    console.log("edit:", id)
    this._taskService.redirect(['products', id , 'edit'])
  }
  onDetails(id){
    this._taskService.redirect(['products', id])
  }
  ngOnInit() {
    this._taskService.getProducts('all').subscribe(data =>{
      this.products = data
    })
  }

}
