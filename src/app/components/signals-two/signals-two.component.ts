import { Component, inject, Signal } from '@angular/core';
import { SignalsService } from '../../services/signals-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface User {
  name: string;
  age: number;
}

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface AsyncData {
  title: string;
  body: string;
}

@Component({
  selector: 'app-signals-two',
  templateUrl: './signals-two.component.html',
  styleUrls: ['./signals-two.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class SignalsTwoComponent {
  private readonly signalsService = inject(SignalsService);

  // Public signal values
  public readonly todos: Signal<Todo[]> = this.signalsService.getTodos();
  public readonly user: Signal<User> = this.signalsService.getUser();
  public readonly asyncData: Signal<AsyncData | null> = this.signalsService.getAsyncData();
  public readonly loading: Signal<boolean> = this.signalsService.getLoading();

  // Public computed values
  public readonly completedCount: Signal<number> = this.signalsService.getCompletedCount();
  public readonly remainingCount: Signal<number> = this.signalsService.getRemainingCount();
  public readonly userStatus: Signal<string> = this.signalsService.getUserStatus();

  // Form values
  public newTodo: string = '';
  public userName: string = '';
  public userAge: string = '';

  public addTodo(): void {
    if (this.newTodo.trim()) {
      this.signalsService.addTodo(this.newTodo.trim());
      this.newTodo = '';
    }
  }

  public toggleTodo(id: number): void {
    this.signalsService.toggleTodo(id);
  }

  public removeTodo(id: number): void {
    this.signalsService.removeTodo(id);
  }

  public updateUser(): void {
    if (this.userName.trim() && this.userAge) {
      this.signalsService.updateUser({
        name: this.userName,
        age: parseInt(this.userAge)
      });
      this.userName = '';
      this.userAge = '';
    }
  }

  public fetchData(): void {
    this.signalsService.fetchData();
  }
}
