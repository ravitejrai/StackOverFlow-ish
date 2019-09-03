import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable, PartialObserver, fromEvent, from, of,concat } from 'rxjs';
import { map, filter, tap, debounceTime, switchMap, concatMap,  } from 'rxjs/operators';

@Component({
  selector: 'app-learnrxjs',
  templateUrl: './learnrxjs.component.html',
  styleUrls: ['./learnrxjs.component.scss']
})
export class LearnrxjsComponent implements OnInit, OnDestroy , AfterViewInit {

  subscription;
  buttonStream$;
  textStream$;
  @ViewChild('stream', { static: true }) button: ElementRef;
  @ViewChild('textStream', { static: true}) inputTextStream: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
     this.buttonStream$ = fromEvent(this.button.nativeElement, 'click')
       .subscribe(res => console.log(res));

     this.textStream$ = fromEvent(this.inputTextStream.nativeElement, 'keyup').pipe(
      // tap(val => console.log(val)),
       debounceTime(500)
       )
       .subscribe(res => console.log(res));

  }

  createObservable() {
    const observable = new Observable(subscriber => {
      subscriber.next('Hello');
      subscriber.error('rreee');
      subscriber.next('how was long week end');

      subscriber.complete();
      subscriber.next('Next va;');
    });

    const observer: PartialObserver<string> = {
      next: value => console.log(value),
      error: error => console.log(error),
      complete: () => console.log('complete')
    };
    observable.subscribe(observer);

  }

  createObservableAsync() {
    const observable = new Observable(subscriber => {

      let count = 0;
      const id =  setInterval(() => {
        subscriber.next(count);
       // subscriber.complete();
        count += 1;
    }, 1000);

      return () => {
        console.log('called');
        clearInterval(id);
      };
    });

    const observer: PartialObserver<string> = {
      next: value => console.log(value),
      error: error => console.log(error),
      complete: () => console.log('complete')
    };
    observable.subscribe(observer);

  }

  createObservableAsyncWithSubscription() {
    const observable = new Observable(subscriber => {

      let count = 0;
      const id =  setInterval(() => {
        subscriber.next(count);
        count += 1;
    }, 1000);

      return () => {
        console.log('called');
        clearInterval(id);
      };
    });

    const observer: PartialObserver<string> = {
      next: value => console.log(value),
      error: error => console.log(error),
      complete: () => console.log('complete')
    };
    this.subscription = observable.subscribe(observer);
    setTimeout(() => {
      this.subscription.unsubscribe();
    }, 5000);

  }

  creationOperators() {
     // of
     // from
     // fromevent

    // timer
    // interval
    // range

  }

  callGitHub() {
    const sources$ = from(fetch('https://api.github.com/users/web2integrators'));
    sources$.subscribe(value => console.log(value));
  }

  // operators filter,map
  // tap
 debugOprator() {

    const numbers$ = of(1, 2, 3, 4);
    numbers$.pipe(
      tap(val => {
        console.log(val);
       // return 100;
      }),
      map(val => val * 5),
      filter(val => val > 10)
    ).subscribe(val => {
      console.log(val);
    });
 }

  concatOperator() {
    const series1$ = of('a', 'b');

    const series2$ = of('x', 'y');

    const result$ = concat(series1$, series2$);

    result$.subscribe(console.log);
  }
  // most imp
  // mergemap concatmap,switchMap,forkjoin

 // concatmap()
  //{
      //from(1,2,3,4)
      //concatmap()
      //concatmap will wait.
  //example
  // getItems(ids: number[]): Observable<Item> {
  //   return from(ids).pipe(
  //     mergeMap(id => <Observable<Item>> this.httpClient.get(`item/${id}`))
  //   );
  // }
  //}

  flatteningOperators() {

    const numbers$ = of(1, 2, 3, 4);
    numbers$.pipe(
      tap(val => console.log(val)),
       concatMap(val => of(val * 2)),
     // map(val => of(val * 2)),
      tap(val => console.log(val)),
    ).subscribe(obs => {
     // obs.subscribe(val => console.log(val));  dont do this
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.buttonStream$.unsubscribe();
  }


}
