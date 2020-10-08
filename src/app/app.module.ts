import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
const approuter : Routes = [
  {
    path:'',
    loadChildren:()=>import('./admin/main/main.module').then((m)=>m.MainModule)
  }
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approuter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
