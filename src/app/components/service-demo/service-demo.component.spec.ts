import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceDemoComponent } from './service-demo.component';
import { ComponentOneComponent } from '../component-one/component-one.component';
import { ComponentTwoComponent } from '../component-two/component-two.component';
import { DataServiceService } from '../../services/data-service.service';
import { ArithmeticServiceService } from '../../services/arithmetic-service.service';

describe('ServiceDemoComponent', () => {
  let component: ServiceDemoComponent;
  let fixture: ComponentFixture<ServiceDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ServiceDemoComponent,
        ComponentOneComponent,
        ComponentTwoComponent
      ],
      providers: [DataServiceService, ArithmeticServiceService]
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render both components', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-component-one')).toBeTruthy();
    expect(compiled.querySelector('app-component-two')).toBeTruthy();
  });
});
