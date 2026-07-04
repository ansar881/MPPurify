import { Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadComponent: ()=>import('./components/home/home.component').then(m=>m.HomeComponent)},
    { path: 'contact', loadComponent: ()=>import('./components/contact/contact.component').then(m=>m.ContactComponent)},
    { path: 'faqs', loadComponent: ()=>import('./components/faqs/faqs.component').then(m=>m.FaqsComponent)},
    { path: 'about', loadComponent: ()=>import('./components/about/about.component').then(m=>m.AboutComponent)},
    { path: 'greenp', loadComponent: ()=>import('./components/greenpromise/greenpromise.component').then(m=>m.GreenpromiseComponent)},
    { path: 'shopp', loadComponent: ()=>import('./components/shopproducts/shopproducts.component').then(m=>m.ShopproductsComponent)},
    { path: '**', component: PagenotfoundComponent}
];
