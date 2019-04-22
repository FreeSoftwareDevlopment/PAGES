import { DOCUMENT } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inhandler(text: string){
    console.log(text);
    //alert(text);
  }
  oowerinhandler(text: string){
    console.log("Add : "+text);
    document.getElementById("growadd").innerHTML = text;
    //alert(text);
  }
}
