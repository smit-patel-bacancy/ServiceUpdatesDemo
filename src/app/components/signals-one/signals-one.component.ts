import { Component, inject, Signal } from '@angular/core';
import { SignalsService } from '../../services/signals-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signals-one',
  templateUrl: './signals-one.component.html',
  styleUrls: ['./signals-one.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SignalsOneComponent {
  private readonly signalsService = inject(SignalsService);

  // Public signal values
  public readonly count: Signal<number> = this.signalsService.getCount();
  public readonly doubleCount: Signal<number> = this.signalsService.getDoubleCount();
  public readonly user: Signal<{ name: string; age: number }> = this.signalsService.getUser();

  public increment(): void {
    this.signalsService.increment();
  }

  public decrement(): void {
    this.signalsService.decrement();
  }
}
