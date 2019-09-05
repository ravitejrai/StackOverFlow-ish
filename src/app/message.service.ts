import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private updateMessage = new BehaviorSubject<any>("sample user");
  sendMessage(message: any) {
     this.updateMessage.next({ tabledata: message });
    // this.updateMessage.asObservable().subscribe((data) => {
    //   //this.userInfo = data
    //   console.log(data, "from service.....")
    //  //console.log("this.u....",this.userInfo)
    // })
  }

  // clearMessages() {
  //   this.updateMessage.next();
  // }

  getMessage(): Observable<any> {
    return this.updateMessage.asObservable();
  }
}
