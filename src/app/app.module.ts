import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { MnpFirstTaskComponent } from './mnp--first/mnp--first.component';

const routes:Routes=[
  {path:"",component:MnpFirstTaskComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MnpFirstTaskComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
