import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentOneComponent } from './component-one.component';
import { DataServiceService } from '../../services/data-service.service';
import { ArithmeticServiceService } from '../../services/arithmetic-service.service';
import { FormsModule } from '@angular/forms';

describe('ComponentOneComponent', () => {
  let component: ComponentOneComponent;
  let fixture: ComponentFixture<ComponentOneComponent>;
  let dataService: DataServiceService;
  let arithmeticService: ArithmeticServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentOneComponent, FormsModule],
      providers: [DataServiceService, ArithmeticServiceService]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentOneComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataServiceService);
    arithmeticService = TestBed.inject(ArithmeticServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with marks details from service', () => {
    expect(component.marksDetails.length).toBeGreaterThan(0);
  });

  it('should add new marks details', () => {
    const initialLength = component.marksDetails.length;
    component.subject = 'Test Subject';
    component.marks = '85';
    component.pushIntoArray();
    expect(component.marksDetails.length).toBe(initialLength + 1);
    expect(component.subject).toBe('');
    expect(component.marks).toBe('');
  });

  it('should calculate sum correctly', () => {
    component.valueOne = '5';
    component.valueTwo = '3';
    component.getSum();
    expect(component.result).toBe(8);
  });

  it('should not add marks with empty fields', () => {
    const initialLength = component.marksDetails.length;
    component.subject = '';
    component.marks = '85';
    component.pushIntoArray();
    expect(component.marksDetails.length).toBe(initialLength);
  });
});
