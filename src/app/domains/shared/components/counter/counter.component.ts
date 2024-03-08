import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';

  constructor() {
    //NO ASYNC CALLS IN CONSTRUCTOR
    // Before render
    console.log('Constructor called');
    console.log('-'.repeat(10));
  }

  ngOnChanges(change: SimpleChanges) {
    // Before and during render
    console.log('ngOnChange called');
    console.log('-'.repeat(10));
    console.log(change);
    const duration = change['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit() {
    // After render
    //Async calls, subscriptions
    console.log('ngOnInit called');
    console.log('-'.repeat(10));
    console.log('Duration:', this.duration);
    console.log('Message:', this.message);
  }

  ngAfterViewInit() {
    // After render
    // hijos ya renderizados
    console.log('ngAfterViewInit called');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {

    console.log('ngOnDestroy called');
    console.log('-'.repeat(10));

  }

  doSomething() {
    console.log('change duration');

  }
}
