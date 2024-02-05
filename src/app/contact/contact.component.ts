import { Component } from '@angular/core';
import {
  MessageService,
  MessageServiceConsole,
  MessageServiceFile,
} from '../service/useClass/message.service';
import {
  count,
  distinctUntilChanged,
  filter,
  from,
  interval,
  map,
  max,
  mergeMap,
  min,
  of,
  scan,
  take,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers: [MessageService],
  // providers: [{ provide: MessageService, useClass: MessageServiceFile }],
})
export class ContactComponent {
  message: string;

  constructor(private messageService: MessageService) {
    this.message = this.messageService.getMessage();
  }

  // RXJS Operators............

  // create an observable using "of" operator
  observable = of(1, 2, 3, 4, 5);

  check_of_observable = () => {
    console.log('Check_of_observable: ');

    const subscription = this.observable.subscribe({
      next: (value) => console.log(value),
      error: (error) => console.error(error),
      complete: () => console.log('Complete'),
    });
    subscription.unsubscribe();
  };

  // create an observable using "from" operator
  arrayObservable = from([1, 2, 3, 4, 5]);
  check_from_observable = () => {
    console.log('Check_from_observable: ');

    const subscription = this.arrayObservable.subscribe({
      next: (value) => console.log(value),
      error: (error) => console.error(error),
      complete: () => console.log('Complete'),
    });
    subscription.unsubscribe();
  };

  // create an observable using "interval" operator
  intervalObservable = interval(1000);
  check_interval_observable = () => {
    console.log('Check_internal_observable: ');

    const subscription = this.intervalObservable.subscribe({
      next: (value) => console.log(value),
      error: (error) => console.error(error),
      complete: () => console.log('Complete'),
    });
    // subscription.unsubscribe();
  };

  // create an observable using "interval" operator
  ajaxObservable = ajax.getJSON('assets/cricketer.json');
  check_ajax_observable = () => {
    console.log('Check_ajax_observable: ');

    const subscription = this.ajaxObservable.subscribe({
      next: (value) => console.log(value),
      error: (error) => console.error(error),
      complete: () => console.log('Complete'),
    });
  };

  // Observable with map Operator...............
  // doubledValues = this.arrayObservable.pipe(map((value) => value * 2));
  check_map_observable = () => {
    console.log('Check_map_observable: ');

    const subscription = this.arrayObservable
      .pipe(map((value) => value * 2))
      .subscribe({
        next: (value) => console.log(value),
        error: (error) => console.error(error),
        complete: () => console.log('Complete'),
      });
  };

  // Observable with filter Operator...............
  check_filter_observable = () => {
    console.log('Check_filter_observable: ');

    const subscription = this.arrayObservable
      .pipe(filter((value) => value % 2 === 0))
      .subscribe({
        next: (value) => console.log(value),
        error: (error) => console.error(error),
        complete: () => console.log('Complete'),
      });
  };

  // Observable with scan Operator...............
  check_scan_observable = () => {
    console.log('Check_scan_observable: ');

    const subscription = this.arrayObservable
      .pipe(scan((acc, value) => acc + value, 0))
      .subscribe({
        next: (value) => console.log(value),
        error: (error) => console.error(error),
        complete: () => console.log('Complete'),
      });
  };

  // Observable with margeMap Operator...............
  check_mergeMap_observable = () => {
    console.log('Check_mergeMap_observable: ');

    const subscription = this.arrayObservable
      .pipe(mergeMap((value) => from([value, value * 10])))
      .subscribe({
        next: (value) => console.log(value),
        error: (error) => console.error(error),
        complete: () => console.log('Complete'),
      });
  };

  // Observable with distinctUntilChanged Operator...............
  mixArrayObservable = from([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);

  check_distinctUntilChanged_observable = () => {
    console.log('Check_distinctUntilChanged_observable: ');

    const subscription = this.mixArrayObservable
      .pipe(distinctUntilChanged())
      .subscribe({
        next: (value) => console.log(value),
        error: (error) => console.error(error),
        complete: () => console.log('Complete'),
      });
  };

  // Observable with take Operator...............
  marvelData = from([
    [1, 'Thor'],
    [2, 'Captain America'],
    [3, 'IronMan'],
    [4, 'SpiderMan'],
    [5, 'Hulk'],
    [6, 'Doctor Strange'],
    [7, 'DeadPool'],
    [8, 'Moon knight'],
  ]);
  check_take_observable = () => {
    console.log('Check_take_observable: ');
    const subscription = this.marvelData.pipe(take(5)).subscribe({
      next: (value) => console.log(value[0] + ':' + value[1]),
      error: (error) => console.error(error),
      complete: () => console.log('Complete'),
    });
  };

  // Observable with Mathematical Operator...............
  mathArray = from([7, 8, 10, 14, 45, 99, 999]);

  check_mathematical = () => {
    this.mathArray.pipe(max()).subscribe({
      next: (value) => console.log('Max : ', value),
    });
    this.mathArray.pipe(min()).subscribe({
      next: (value) => console.log('Min : ', value),
    });
    this.mathArray.pipe(count((t) => t < 30)).subscribe({
      next: (value) => console.log('Count : ', value),
    });
  };
}
