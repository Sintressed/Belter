import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id
  product
  del = false
  constructor(private _route: ActivatedRoute, private _taskService: TaskService) { }
  onRedirect(){
    this._taskService.redirect(['products'])
  }
  onDelete(id){
    this._taskService.deleteProduct(this.product._id)
  }
  ngOnInit() {
    this._route.paramMap.subscribe( params => {
      console.log(params.get('id'));
      this._taskService.getProducts(params.get('id')).subscribe(data =>{
        this.product = data[0]
        if(data[0].qty === 0){
          this.del = true
        }
      })
 })
  }

}
