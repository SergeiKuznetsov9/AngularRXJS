import { Component, OnInit } from '@angular/core';
import { catchError, concat, filter, finalize, first, from, interval, map, of, pipe, skip, Subject, take, takeUntil, tap, timer } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  ngOnInit() {

// Операторы можно разделить на 2 типа: операторы которые работают внутри Pipe и те, которые работают с потоками
// Внутри Pipe могут работать только те операторы, которые принимают observable И возвращают observable.
// Если к observable применить pipe, то он выдаст преобразованные значения.
// Значения будут преобразованы операторами, которые передадутся в pipe. Преобразователи передаются через запятую,
// например:
// from([30, 61, 48, 90])
//  .pipe(
//   filter( val => val % 10 === 0),
//   map( val => val*2),   
//  )
//    .subscribe(val => console.log(val))
//
//
//




// Более расширенная классификация следующая

//Создания (of, from, fromEvent, interval)
// fromEvent(document, 'mouseMove')
// of('anyString')
// from(['anyString1', 'anyString2'])

// первый аргумент - начальная задержка
// timer(3000, 50).subscribe(val => console.log(val))

/* interval(10).subscribe(val => console.log(val)) */


// throwError('error')

// также можно создать из promise: 
//from(promise), в данном случае в качестве аргумента передаются промис
//Это нужно, т.к. в pipe нельзя передать промис, но можно передать оператор, который будет его выплевыать

// const promise = Promise.resolve(2)
// from(promise).subscribe(val => console.log('val', val))





// Pipe не делает абсолютно ничего кроме как передает значение от одного observable другому
// Примененеие pipe:

// const logPipe = pipe(
//   map( (val: any) => {
//     /* console.log(val) */
//     return val*2
// }))

// const obs = interval(100)

// obs.pipe(logPipe, pipe( tap(val => console.log(val)) )).subscribe()
// В данном случае в метод pipe передан еще один pipe с преобразователем.
// Это тоже самое если бы мы в переменную поместили один лишь преобразователь и передали бы
// его в pipe






 













//Преобразования (map, scan, buffer)
// map - совершает определенные действие над значением и передает дальше
// возвращаемое значение


//Фильтрации (filter, take, skip, distinkt)
//filter - Пропускает данные, только если возвращается true
// skip - не пропускает далее в поток колчество первых элементов указанных в скобках
    // например skip(2) - откинет первые два полученных значения, остальные пропустит
// first() - возьмет только первый элемент и разрушит дальнейшую подписку
// take(2) - возьмет только количество первых элементов, указанных в () и разрушит дальнейшую подписку
// takeUntil(event$) - часто используемый оператор, принимает event. Как только event случится,
    // подписка разрушится: примеры:

// const subj = new Subject()

// const emitNumbersByInterval = interval(500)
// emitNumbersByInterval.pipe(
//   map( val => val*2),
//   skip(2),
//   filter( val => val !== 6),
//   /* first(), */
//   /* take(5), */
//   takeUntil(subj)
// ).subscribe( val => console.log(val))

// setTimeout(() => {
//   subj.next(5)
// }, 3000);




// Пример отписки с takeUntil:

// private destroyed$ = new Subject();

// ngOnInit() {
//   myInfiniteStream$
//     .pipe(takeUntil(this.destroyed$))
//     .subscribe( () => ...Component.)
// }

// ngOnDestroyed$() {
//   this.destroyed$.next();
//   this.destroyed$.complete();

// };

























//Обработки ошибок (catchError, retry, onErrorResumeNext)
// catchError - Отлавливает в цепочке ошибку и возвращает новый поток, который проходит по цепочке далее
//  finalize - отрабатиывает либо если observable словил ошибку, либо если он закомплитился

/* const emitNumbersByInterval = interval(500)
const subscription = emitNumbersByInterval.pipe( */
/*   map( val => {
    if(val === 5) throw new Error('error');
    
    console.log(val)
    return val
  }), */
/*   catchError( err => {
    console.log(err)
    return interval(100)
  }),
  finalize( () => console.log('err/complete'))


).subscribe( val => console.log(val))

setTimeout( () => {
  subscription.unsubscribe()
}, 3000) */







// tap - никак не влияет на поток, в нем можно что-то делать со значениями
// кроме тогог он может принимать три функции - для нормального значения, ошибки и в случае complete.





//Условия (skipUntil, skipWhile, takeUntil, takeWhile)
//математические (min, max, count)
//Утилиты (tap, delay)
//Для connectable observable (share, shareReplay, publish)









//Для совмещения потоков используется оператор concat():

/* concat(
  interval(1000), 
  of(4, 5, 6),
).subscribe( val => console.log(val)) */

//Он объединяет потоки в один единый, но делает это по-порядку. Он не перейдет
// к следующему потоку, пока активный не закомпличен
//
// Существует другой оператор: merge - он также принимает потоки, но ему не важно,
// закомпличен поток или нет
//
// forkJoin -  похож на concat за тем лишь отличием, что значения выдаются не по порядку, а массивом
// Этот массив будет выдан только когда все закоплититься и в массив попадут только 
// последние значения какждого потока
//
//








// Операторы трансформации
// основных - 4 штуки:

// map - все понятно

// concatMap - отличается от предыдущего в том, что должен возвращать поток 
// при этом он не начнет обрабатывать следующее значение, пока не завершит обработку текущего

// switchMap - переключает поток с одного на другой. Тут важно то, что операция,
// переданная в него может занимать некоторое время и пока она выполняется, все попадающие в него значения
// будут игнорироваться


// оператор share - подогревает поток. Из холодного делает горячий. При этом поток
// запускает только когда появился первый подписчик


  }

}
