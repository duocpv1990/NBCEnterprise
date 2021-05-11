import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from 'src/app/layout/layout.module';
import { MainComponent } from './main.component';
import { mainRoutes } from './main.routes';

@NgModule({
  declarations: [MainComponent, ],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes),
    LayoutModule,],
  providers: [],
})
export class MainModule {}
