import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './photos.component';
import { PhotosGuard } from './photos.guard';

const routes: Routes = [
  {
    path: '',
    component: PhotosComponent,
    canActivate: [PhotosGuard],
    data: {

    }
  },
  {
    path: 'tags/:tag',
    component: PhotosComponent,
    canActivate: [PhotosGuard],
    data: { reuse: false },
  },
  {
    path: 'tags',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
