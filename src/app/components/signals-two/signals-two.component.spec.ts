import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalsTwoComponent } from './signals-two.component';
import { SignalsService } from '../../services/signals-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('SignalsTwoComponent', () => {
  let component: SignalsTwoComponent;
  let fixture: ComponentFixture<SignalsTwoComponent>;
  let signalsService: SignalsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsTwoComponent, CommonModule, FormsModule],
      providers: [SignalsService]
    }).compileComponents();

    fixture = TestBed.createComponent(SignalsTwoComponent);
    component = fixture.componentInstance;
    signalsService = TestBed.inject(SignalsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new todo when addTodo is called', () => {
    component.newTodo = 'Test Todo';
    component.addTodo();
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const todoList = compiled.querySelector('.todo-list');
    expect(todoList.textContent).toContain('Test Todo');
  });

  it('should not add empty todos', () => {
    component.newTodo = '';
    component.addTodo();
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const todoList = compiled.querySelector('.todo-list');
    expect(todoList.children.length).toBe(0);
  });

  it('should toggle todo completion when clicked', () => {
    // First add a todo
    component.newTodo = 'Test Todo';
    component.addTodo();
    fixture.detectChanges();

    // Then toggle it
    const compiled = fixture.nativeElement;
    const todoSpan = compiled.querySelector('.todo-list li span');
    todoSpan.click();
    fixture.detectChanges();

    expect(compiled.querySelector('.todo-list li.completed')).toBeTruthy();
  });

  it('should remove todo when delete button is clicked', () => {
    // First add a todo
    component.newTodo = 'Test Todo';
    component.addTodo();
    fixture.detectChanges();

    // Then delete it
    const compiled = fixture.nativeElement;
    const deleteButton = compiled.querySelector('.delete-btn');
    deleteButton.click();
    fixture.detectChanges();

    expect(compiled.querySelector('.todo-list li')).toBeFalsy();
  });

  it('should show loading state when fetching data', () => {
    const compiled = fixture.nativeElement;
    const fetchButton = compiled.querySelector('.async-section button');
    fetchButton.click();
    fixture.detectChanges();

    expect(fetchButton.textContent.trim()).toBe('Loading...');
  });
});
