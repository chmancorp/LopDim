import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2);

  constructor() {
    effect(() => console.log('Counter changed:', this.counter()));
  }

  increment(): void {
    this.counter.update(c => c + 1);
  }
}
