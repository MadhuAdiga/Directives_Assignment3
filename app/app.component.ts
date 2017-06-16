import { Component, OnInit, Directive } from '@angular/core'; //Import Component and ngOnInit dependenicies


@Component({
  selector: 'my-app',
  templateUrl:'app/app.component.html' ,
  styles: [`
            .classTableHead {background-color:	#ffa69f;
                             border: 3px solid #ffb69f}`,
            `.classTableBody {background-color:	#ffe69f;
                             border: 3px solid #ffd69f}
         `]// Two styles are defined, one for the table head and one for the table body
})


export class AppComponent { // Export a class AppComponent 
        
        
         //Declare a variable to set current value of table display
        

} 
