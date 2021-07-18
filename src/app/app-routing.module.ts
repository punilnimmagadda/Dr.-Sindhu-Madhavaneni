import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromoBannerComponent } from '../app/components/promo-banner/promo-banner.component';

const routes: Routes = [
  { path: 'promo-banner', component: PromoBannerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
