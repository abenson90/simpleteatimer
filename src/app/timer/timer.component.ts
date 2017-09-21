import {Component, OnInit, OnDestroy} from '@angular/core';
import {DataService} from '../core/data.service';
import {Router} from "@angular/router";
import {Observable} from 'rxjs/Rx';

@Component({

  templateUrl:"./timer.component.html",
  styleUrls:["./timer.component.css"]

})
export class TimerComponent implements OnInit, OnDestroy{
  public seconds;
  public minutes;
  public timer;
  public timerHandler;
  public addMinute;
  public disposeTimer;
  public alarm;
  ngOnInit(){
    
       this.timerHandler = Observable.timer(0,60000);
       this.timer = this.timerHandler.switchMap(() => Observable.timer(0,1000));
       this.disposeTimer = this.timer.subscribe(res=>{
             this.checkTimer(res);
       })
       this.alarm= new Audio();
       this.alarm.src = "/assets/sounds/1.mp3";
       this.minutes =0;
       this.seconds =0;

  }
constructor(private dataService: DataService, private router: Router){

}

ngOnDestroy() {
    this.disposeTimer.unsubscribe();
  }

  checkTimer(seconds){

     this.seconds = seconds;
     if(this.addMinute==true){

       this.minutes+=1;
       this.addMinute=false;
       if(this.minutes==this.dataService.minutes){
           this.disposeTimer.unsubscribe();
           this.alarm.load();
           this.alarm.addEventListener('ended', function() {
               this.currentTime = 0;
               this.play();
           }, false);
           this.alarm.play();
       }
     }
     if(this.seconds == 59)
        this.addMinute = true;
  }

  stopTimer(){
     this.alarm.pause();
     this.alarm.stop();
     this.disposeTimer.unsubscribe();
  }
}
