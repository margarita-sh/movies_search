import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	/* {
	  path:'',
	  component: HomeComponent
	},
	{
	  path:'contacts',
	  loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)
	  
	},
	{
	  path:'about',
	  component: AboutUsComponent,
	  canActivate: [CanProceedToAboutUsGuard]
	},
	{
	  path:'**',
	  component: NotFoundComponent
	} */
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
