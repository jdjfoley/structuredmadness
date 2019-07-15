import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ServicesComponent } from './views/services/services.component';
import { StructuredMadnessComponent } from './views/structured-madness/structured-madness.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'structured-madness', component: StructuredMadnessComponent},
	{ path: 'services', component: ServicesComponent },
	{ path: '*', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
