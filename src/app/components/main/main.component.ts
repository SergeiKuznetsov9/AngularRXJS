import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  BehaviorSubject,
  fromEvent,
  interval,
  Observable,
  share,
  Subject,
} from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, AfterViewInit {
  @ViewChild('inputForListening') inputForListening: any;
  interval$ = interval(1000);

  promiseWillResolve: boolean = false;

  ngOnInit() {
    //образец обычного промиса
    /*     const promise = new Promise( (resolve, reject) => {
      setTimeout(() => {
        this.promiseWillResolve ? resolve('resolved') : reject('rejected')
        resolve
      }, 2000);
    })
    promise.then( res => console.log(res)).catch( err => console.log(err)) */





    //образец обычного вручную созданного observable:
    // после complete и error ничего выкидываться не будет
    /*     const stream$ = new Observable<number>( observer => {
      observer.next(1);
      setTimeout(() => {observer.next(2)}, 1000);
      setTimeout(() => {observer.next(3)}, 2000);
      setTimeout(() => {observer.complete()}, 3000);
      setTimeout(() => {observer.error(3)}, 3000);
    })






    // метод subscribe есть у любого observable
    stream$.subscribe( value => console.log(value)) */







    // Observable можно поделить на горячие и холодные
    // Горячие рассылают свои значения, даже если нет подписчиков
    // Холодные начинаю эмитить свои значения только тогда, когда на них кто-то подписался. При
    // этом для каждого подписчика будут выданы свои коллекции значений






    // Холодный:
    /* const stream$ = new Observable<number>( observer => {
  observer.next(1);
  setTimeout(() => {observer.next(2)}, 1000);
  setTimeout(() => {observer.next(3)}, 2000);
  setTimeout(() => {observer.complete()}, 2100);
})
setTimeout(() => {
  stream$.subscribe( value => console.log('Первый подписчик', value))
}, 500);
setTimeout(() => {
  stream$.subscribe( value => console.log('Второй подписчик', value))
}, 1000); */







    // Горячий:
    /* const stream$ = new Observable<number>( observer => {
  observer.next(1);
  setTimeout(() => {observer.next(2)}, 1000);
  setTimeout(() => {observer.next(3)}, 2000);
  setTimeout(() => {observer.complete()}, 2100);
})

const hotStream$ = stream$.pipe(share())
setTimeout(() => {
  hotStream$.subscribe( value => console.log('Первый подписчик', value))
}, 0);

//Этот подписчик получит только то, что успеет
setTimeout(() => {
  hotStream$.subscribe( value => console.log('Второй подписчик', value))
}, 1500); */


    // Хороший пример горячего подписчика - это subject. Вот иллюстрация:
    /* const streamSubj = new Subject<number>
setTimeout(() => {streamSubj.next(1)}, 0);
setTimeout(() => {streamSubj.next(2)}, 1000);
setTimeout(() => {streamSubj.next(3)}, 2000);
setTimeout(() => {streamSubj.next(4)}, 3000);
setTimeout(() => {streamSubj.next(5)}, 4000);

setTimeout(() => {streamSubj.subscribe( val => console.log('Первый подписчик', val))}, 500);
setTimeout(() => {streamSubj.subscribe( val => console.log('Второй подписчик', val))}, 2500); */




    // От подписки можнео отписаться:
    /* const stream = new Observable( observer => {
  setTimeout(() => {observer.next(1)}, 0);
  setTimeout(() => {observer.next(2)}, 1000);
  setTimeout(() => {observer.next(3)}, 2000);
  setTimeout(() => {observer.next(4)}, 3000);
  setTimeout(() => {observer.next(5)}, 4000);
})
const subscription = stream.subscribe( res => console.log(res))
setTimeout(() => {subscription.unsubscribe()}, 2500); */
    /* //subscribe принимает три параметра на самом деле:
const stream = new Observable( observer => {
  setTimeout(() => {observer.next(1)}, 0);
  setTimeout(() => {observer.next(2)}, 1000);
  setTimeout(() => {observer.error(3)}, 2000);
})





//устаревший метод
stream.subscribe( 
  (val) => console.log(val),
  (error) => console.log('Поток завершился с ошибкой', error),
  () => console.log('Поток окончен'),
)

//нынешний метод
stream.subscribe({
  next: (val) => console.log(val),
  error: (err) => console.log(err),
  complete: () => console.log('Поток окончен'),
}) */







    //ГОРЯЧИЕ ПОТОКИ Subject
    /* const nameOfSubject: Subject<string> = new Subject()
const subscription = nameOfSubject.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.log(error),
  complete: () => console.log('completed')
})

setTimeout(() => {
  nameOfSubject.next('first value at 1 sec')
}, 1000);

setTimeout(() => {
  nameOfSubject.next('second value at 2 sec')
}, 2000);

setTimeout(() => {
  nameOfSubject.error('Game over')
}, 3000);

setTimeout(() => {
  nameOfSubject.complete()
}, 4000); */







    //Разновидностью subject является behaviourSubject. Он точно такой же но
    //имеет метод getValue, который позволяет получить его последнее значение.
    //При его инициализации ему также устанавливается начальное значение, которое можно
    //получить, пока он не сэмитил какое либо значение:
    /* const behaviourSubjectB: BehaviorSubject<number> = new BehaviorSubject(9)

behaviourSubjectB.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.log(error),
  complete: () => console.log('completed')
})

setTimeout(() => {
  console.log('Previous value:', behaviourSubjectB.getValue())
}, 1000);


setTimeout(() => {
  behaviourSubjectB.next(2)
  console.log('bs emited 2')
}, 2000);

setTimeout(() => {
  console.log('Previous value:', behaviourSubjectB.getValue())
}, 3000);

setTimeout(() => {
  behaviourSubjectB.complete()
}, 4000); */

// Удобно использовать в сервисах авторизации для получения последнего состояния






    /* //Еще один метод interval:
const interval$ = interval(1000)
interval$.subscribe( console.log)
//Неудобство данного метода в том, что от него нужно отписываться
//Для того, чтобы этого избежать можно использовать асинхронные пайпы. см шаблон */







    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
  }

  ngAfterViewInit() {

    /* //метод FromEvent позволяет навесить событие на что-нибудь:
fromEvent(this.inputForListening.nativeElement, 'input').subscribe( res => console.log(res)) */
  }
}

/*   const input = document.createElement('input');
  formEvent(input, 'keydown').pipe(
    map( e: KeybardEvent ) => e.key
  ) */
