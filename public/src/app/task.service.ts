import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
product =  {
  name: "",
  qty: "",
  price: "",
}
  constructor(private _http: HttpClient, private route: Router) { }
  addProduct(product){
    this._http.post('/addProduct', product).subscribe(data =>{
      console.log(" add product data: ", data)
    })
  }
  getProducts(command){
    return this._http.post('/getProduct', [command])
  }
  updateProduct(product){
    console.log("updating Product: ", product)
    this._http.post('/updateProduct', product).subscribe(data =>{
      console.log("data : ", data)
    })
  }
  deleteProduct(id){
    console.log("deleting: ",id)
    this._http.post('/deleteProduct', [id]).subscribe(data =>{
      console.log(data)
      this.redirect(['products'])
    })
  }
  redirect(place){
    this.route.navigate(place)
  }

}
