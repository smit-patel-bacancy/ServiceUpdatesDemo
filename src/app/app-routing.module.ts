import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceDemoComponent } from './components/service-demo/service-demo.component';
import { SignalsOneComponent } from './components/signals-one/signals-one.component';
import { SignalsTwoComponent } from './components/signals-two/signals-two.component';

const routes: Routes = [
  { path: '', component: ServiceDemoComponent },
  { path: 'signals/basic', component: SignalsOneComponent },
  { path: 'signals/advanced', component: SignalsTwoComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
