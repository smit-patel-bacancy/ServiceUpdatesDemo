import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalsOneComponent } from './signals-one.component';
import { SignalsService } from '../../services/signals-service.service';
import { CommonModule } from '@angular/common';

describe('SignalsOneComponent', () => {
  let component: SignalsOneComponent;
  let fixture: ComponentFixture<SignalsOneComponent>;
  let signalsService: SignalsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsOneComponent, CommonModule],
      providers: [SignalsService]
    }).compileComponents();

    fixture = TestBed.createComponent(SignalsOneComponent);
    component = fixture.componentInstance;
    signalsService = TestBed.inject(SignalsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display initial count and double count', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Count: 0');
    expect(compiled.querySelectorAll('p')[1].textContent).toContain('Double Count: 0');
  });

  it('should increment count when increment button is clicked', () => {
    const compiled = fixture.nativeElement;
    const incrementButton = compiled.querySelector('button');
    incrementButton.click();
    fixture.detectChanges();
    expect(compiled.querySelector('p').textContent).toContain('Count: 1');
  });

  it('should decrement count when decrement button is clicked', () => {
    const compiled = fixture.nativeElement;
    const decrementButton = compiled.querySelectorAll('button')[1];
    decrementButton.click();
    fixture.detectChanges();
    expect(compiled.querySelector('p').textContent).toContain('Count: -1');
  });

  it('should display user information', () => {
    const compiled = fixture.nativeElement;
    const userSection = compiled.querySelector('.user-section');
    expect(userSection.textContent).toContain('Name:');
    expect(userSection.textContent).toContain('Age:');
    expect(userSection.textContent).toContain('Email:');
  });
});
