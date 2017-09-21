import {Component} from '@angular/core';
import {DataService} from '../core/data.service';
import {Router} from "@angular/router";
@Component({

  templateUrl:"./home.component.html",
  styleUrls:["./home.component.css"]

})
export class HomeComponent{

constructor(private dataService: DataService, private router: Router){

}


startTimer(minutes){
  if (isNaN(minutes))
  {
    alert("You must insert a number!");

  }else
  if(minutes<0 || minutes > 60){

      alert("Minutes must be between 0 and 60!");
  }else{

    this.dataService.minutes = minutes;
    this.router.navigate(['/timer']);
  }

}


}
