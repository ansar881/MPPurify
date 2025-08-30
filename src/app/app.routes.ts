import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'contact', loadComponent: ()=>import('./components/contact/contact.component').then(m=>m.ContactComponent)},
    { path: 'faqs', loadComponent: ()=>import('./components/faqs/faqs.component').then(m=>m.FaqsComponent)},
    { path: 'advertise', loadComponent: ()=>import('./components/advertise/advertise.component').then(m=>m.AdvertiseComponent)},
    { path: 'greenp', loadComponent: ()=>import('./components/greenpromise/greenpromise.component').then(m=>m.GreenpromiseComponent)},
    { path: 'shopp', loadComponent: ()=>import('./components/shopproducts/shopproducts.component').then(m=>m.ShopproductsComponent)},
    { path: '**', component: PagenotfoundComponent}
];
