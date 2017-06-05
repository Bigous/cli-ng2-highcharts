import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Ng2HighchartsModule } from 'ng2-highcharts';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2HighchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
