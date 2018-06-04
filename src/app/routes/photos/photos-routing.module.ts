import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './photos.component';

const routes: Routes = [
  { path: '', component: PhotosComponent },
  { path: 'tags/:tag', component: PhotosComponent, data: { reuse: false }},
  { path: 'tags', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
