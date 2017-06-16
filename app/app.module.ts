import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HiddenDirective } from './app.directive'; //Import HiddenDirective, a custom defined directive



@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HiddenDirective], // Declare the HiddenDirective with the AppModule which will make the directive available to all the components in the application
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
