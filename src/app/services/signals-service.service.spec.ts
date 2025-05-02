import { TestBed } from '@angular/core/testing';
import { SignalsService } from './signals-service.service';
import { fakeAsync, tick } from '@angular/core/testing';

describe('SignalsService', () => {
  let service: SignalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Counter Signals', () => {
    it('should initialize count with 0', () => {
      expect(service.getCount()()).toBe(0);
    });

    it('should increment count', () => {
      service.increment();
      expect(service.getCount()()).toBe(1);
    });

    it('should decrement count', () => {
      service.decrement();
      expect(service.getCount()()).toBe(-1);
    });

    it('should compute double count', () => {
      service.increment();
      service.increment();
      expect(service.getDoubleCount()()).toBe(4);
    });
  });

  describe('User Signals', () => {
    it('should initialize with default user', () => {
      const user = service.getUser()();
      expect(user.name).toBe('John Doe');
      expect(user.age).toBe(30);
    });

    it('should update user', () => {
      service.updateUser({ name: 'Jane Doe', age: 25 });
      const user = service.getUser()();
      expect(user.name).toBe('Jane Doe');
      expect(user.age).toBe(25);
    });

    it('should compute user status as Adult', () => {
      service.updateUser({ age: 20 });
      expect(service.getUserStatus()()).toBe('Adult');
    });

    it('should compute user status as Minor', () => {
      service.updateUser({ age: 15 });
      expect(service.getUserStatus()()).toBe('Minor');
    });
  });

  describe('Todo Signals', () => {
    it('should initialize with default todos', () => {
      const todos = service.getTodos()();
      expect(todos.length).toBe(2);
      expect(todos[0].text).toBe('Learn Angular Signals');
      expect(todos[1].text).toBe('Build a demo app');
    });

    it('should add new todo', () => {
      service.addTodo('New Todo');
      const todos = service.getTodos()();
      expect(todos.length).toBe(3);
      expect(todos[2].text).toBe('New Todo');
      expect(todos[2].completed).toBeFalse();
    });

    it('should toggle todo completion', () => {
      service.toggleTodo(1);
      const todos = service.getTodos()();
      expect(todos[0].completed).toBeTrue();
    });

    it('should remove todo', () => {
      service.removeTodo(1);
      const todos = service.getTodos()();
      expect(todos.length).toBe(1);
      expect(todos[0].id).toBe(2);
    });

    it('should compute completed count', () => {
      service.toggleTodo(1);
      expect(service.getCompletedCount()()).toBe(1);
    });

    it('should compute remaining count', () => {
      service.toggleTodo(1);
      expect(service.getRemainingCount()()).toBe(1);
    });
  });

  describe('Async Data Signals', () => {
    it('should initialize loading as false', () => {
      expect(service.getLoading()()).toBeFalse();
    });

    it('should initialize asyncData as null', () => {
      expect(service.getAsyncData()()).toBeNull();
    });

    it('should fetch data successfully', fakeAsync(() => {
      const mockResponse = { id: 1, title: 'Test', completed: false };
      spyOn(window, 'fetch').and.returnValue(
        Promise.resolve({
          json: () => Promise.resolve(mockResponse)
        } as Response)
      );

      service.fetchData();
      expect(service.getLoading()()).toBeTrue();

      tick();
      expect(service.getLoading()()).toBeFalse();
      expect(service.getAsyncData()()).toEqual(mockResponse);
    }));

    it('should handle fetch error', fakeAsync(() => {
      spyOn(window, 'fetch').and.returnValue(
        Promise.reject('Error')
      );
      spyOn(console, 'error');

      service.fetchData();
      expect(service.getLoading()()).toBeTrue();

      tick();
      expect(service.getLoading()()).toBeFalse();
      expect(service.getAsyncData()()).toBeNull();
      expect(console.error).toHaveBeenCalled();
    }));
  });
});
