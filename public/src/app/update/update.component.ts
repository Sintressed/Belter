import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/task.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  product;
  id;
  constructor(private _route: ActivatedRoute, private _taskService: TaskService) { }
  onSubmit(formData){
    this._taskService.updateProduct([this.id,this.product])
  }
  onReset(formData){
    formData.reset()
  }
  ngOnInit() {
    this._route.paramMap.subscribe( params => {
      console.log(params.get('id'));
      this._taskService.getProducts(params.get('id')).subscribe(data =>{
        console.log(data)
        this.id = data[0]._id
        this.product= {
          name: data[0].name,
          qty: data[0].qty,
          price: data[0].price
        }
      })
 })
  }

}
