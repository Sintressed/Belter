import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from 'src/app/list/list.component';
import { DetailComponent } from 'src/app/detail/detail.component';
import { NewComponent } from 'src/app/new/new.component';
import { UpdateComponent } from 'src/app/update/update.component';

const routes: Routes = [
  {path: 'products', component: ListComponent, pathMatch: 'full'},
  {path: 'products/new', component: NewComponent, pathMatch: 'full'},
  {path: 'products/:id/edit', component: UpdateComponent, pathMatch: 'full'},
  {path: 'products/:id', component:DetailComponent, pathMatch: 'full'},
  {path: '**', redirectTo: 'products'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
