import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicLayoutComponent } from './dynamic-layout/dynamic-layout.component';
import { HorizontalLayoutComponent } from './horizontal-layout/horizontal-layout.component';
import { AppComponent } from './app.component';


const routes: Routes = [{
  path: '',
  component: AppComponent
}, {
  path: 'horizontal',
  component: HorizontalLayoutComponent
}, {
  path: 'dynamic',
  component: DynamicLayoutComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
