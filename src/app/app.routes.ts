import { Routes } from '@angular/router';
import { ServiceDemoComponent } from './components/service-demo/service-demo.component';
import { SignalsDemoComponent } from './components/signals-demo/signals-demo.component';
import { AdvancedSignalsDemoComponent } from './components/advanced-signals-demo/advanced-signals-demo.component';

export const routes: Routes = [
  { path: '', component: ServiceDemoComponent },
  { path: 'signals/basic', component: SignalsDemoComponent },
  { path: 'signals/advanced', component: AdvancedSignalsDemoComponent },
  { path: '**', redirectTo: '' }
];
