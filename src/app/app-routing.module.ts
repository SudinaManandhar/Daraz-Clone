import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DetailsComponent } from './details/details.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    title: 'Daraz | Home'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    
  },
  {
    path: 'login', component: LoginComponent,
    title: 'Daraz | Login'
  },
  {
    path: 'signup', component: SignupComponent,
    title: 'Daraz | Signup'
  },

  {
    path: 'details', component: DetailsComponent,
    title: 'Daraz | Product Details'
  },

  {
    path: 'categories', component: CategoriesComponent,
    title: 'Daraz | Categories'
  },
  
  { path: 'details-component', 
    title: 'Daraz | Product Details',
    component: DetailsComponent
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
