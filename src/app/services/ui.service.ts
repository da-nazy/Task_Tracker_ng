import { Injectable } from '@angular/core';
import {Observable,Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask:boolean=false;
  private subject=new Subject<any>();

  constructor() { }

  toggleAddTask():void{
    // call this on button click
    this.showAddTask=!this.showAddTask;
    this.subject.next(this.showAddTask);
    
  }

  onToggle():Observable<any>{
    // subscribe to onToggle
    return this.subject.asObservable();

  }
}
