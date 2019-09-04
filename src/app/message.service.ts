import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private updateMessage = new Subject<any>();
  sendMessage(message: any) {
    this.updateMessage.next({ tabledata: message });
  }

  clearMessages() {
    this.updateMessage.next();
  }

  getMessage(): Observable<any> {
    return this.updateMessage.asObservable();
  }
}
