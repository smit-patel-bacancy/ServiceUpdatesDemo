import { Injectable, signal, computed, effect, Signal } from '@angular/core';

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

@Injectable({
  providedIn: 'root'
})
export class SignalsService {
  // Private signals
  private readonly count = signal<number>(0);
  private readonly user = signal<User>({ name: 'John Doe', age: 30 });
  private readonly todos = signal<Todo[]>([]);
  private readonly loading = signal<boolean>(false);
  private readonly asyncData = signal<AsyncData | null>(null);

  // Computed signals
  private readonly doubleCount = computed<number>(() => this.count() * 2);
  private readonly completedCount = computed<number>(() =>
    this.todos().filter(todo => todo.completed).length
  );
  private readonly remainingCount = computed<number>(() =>
    this.todos().filter(todo => !todo.completed).length
  );
  private readonly userStatus = computed<string>(() =>
    this.user().age >= 18 ? 'Adult' : 'Minor'
  );

  constructor() {
    // Effect to log count changes
    effect(() => {
      console.log(`Count changed to: ${this.count()}`);
    });

    // Initialize with some todos
    this.todos.set([
      { id: 1, text: 'Learn Angular Signals', completed: false },
      { id: 2, text: 'Build a demo app', completed: false }
    ]);
  }

  // Public getters for signals
  public getCount(): Signal<number> {
    return this.count;
  }

  public getDoubleCount(): Signal<number> {
    return this.doubleCount;
  }

  public getUser(): Signal<User> {
    return this.user;
  }

  public getTodos(): Signal<Todo[]> {
    return this.todos;
  }

  public getLoading(): Signal<boolean> {
    return this.loading;
  }

  public getAsyncData(): Signal<AsyncData | null> {
    return this.asyncData;
  }

  public getCompletedCount(): Signal<number> {
    return this.completedCount;
  }

  public getRemainingCount(): Signal<number> {
    return this.remainingCount;
  }

  public getUserStatus(): Signal<string> {
    return this.userStatus;
  }

  // Public methods to update signals
  public increment(): void {
    this.count.update(value => value + 1);
  }

  public decrement(): void {
    this.count.update(value => value - 1);
  }

  public updateUser(user: Partial<User>): void {
    this.user.update(currentUser => ({
      ...currentUser,
      ...user
    }));
  }

  public addTodo(text: string): void {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false
    };
    this.todos.update(todos => [...todos, newTodo]);
  }

  public toggleTodo(id: number): void {
    this.todos.update(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  public removeTodo(id: number): void {
    this.todos.update(todos => todos.filter(todo => todo.id !== id));
  }

  public async fetchData(): Promise<void> {
    this.loading.set(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      this.asyncData.set(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      this.loading.set(false);
    }
  }
}
