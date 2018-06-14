import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  product = this._taskService.product;
  constructor(private _taskService: TaskService) { }
  onSubmit(formData){
    console.log("form data value: ", formData.value)
    this._taskService.addProduct(this.product)
  }
  onReset(formData){
    formData.reset()
  }

  ngOnInit() {
  }

}
