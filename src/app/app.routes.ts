import { Routes } from '@angular/router';
import { EcommerceComponent } from './pages/dashboard/ecommerce/ecommerce.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormElementsComponent } from './pages/forms/form-elements/form-elements.component';
import { BasicTablesComponent } from './pages/tables/basic-tables/basic-tables.component';
import { BlankComponent } from './pages/blank/blank.component';
import { NotFoundComponent } from './pages/other-page/not-found/not-found.component';
import { AppLayoutComponent } from './shared/layout/app-layout/app-layout.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { LineChartComponent } from './pages/charts/line-chart/line-chart.component';
import { BarChartComponent } from './pages/charts/bar-chart/bar-chart.component';
import { AlertsComponent } from './pages/ui-elements/alerts/alerts.component';
import { AvatarElementComponent } from './pages/ui-elements/avatar-element/avatar-element.component';
import { BadgesComponent } from './pages/ui-elements/badges/badges.component';
import { ButtonsComponent } from './pages/ui-elements/buttons/buttons.component';
import { ImagesComponent } from './pages/ui-elements/images/images.component';
import { VideosComponent } from './pages/ui-elements/videos/videos.component';
import { SignInComponent } from './pages/auth-pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/auth-pages/sign-up/sign-up.component';
import { CalenderComponent } from './pages/calender/calender.component';
import { HomeComponent } from './pages/home/home/home.component';
import { ProductDetailsComponent } from './pages/product/product-details/product-details.component';
import { ServiceCategoryComponent } from './pages/product/service-category/service-category.component';
import { AboutUsComponent } from './pages/home/about-us/about-us.component';
import { PartnerComponent } from './pages/home/partner/partner.component';
import { ContactUsComponent } from './pages/home/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './pages/home/privacy-policy/privacy-policy.component';
import { TermsComponent } from './pages/home/terms/terms.component';
import { TopCategoriesComponent } from './pages/home/top-categories/top-categories.component';

export const routes: Routes = [
  // {
  //   path:'',
  //   component:AppLayoutComponent,
  //   children:[
     
  //   ]
  // },
  // auth pages
  {
    path:'signin',
    component:SignInComponent,
    title:'Sign In Dashboard'
  },
  {
    path:'signup',
    component:SignUpComponent,
    title:'Sign Up Dashboard'
  },
  {
    path:'home',
    loadComponent: () =>
      import('./pages/home/home/home.component')
        .then(c => c.HomeComponent),
    title:'Home | tez.health'
  },
  {
    path:'product-details',
    loadComponent: () =>
      import('./pages/product/product-details/product-details.component')
        .then(c => c.ProductDetailsComponent),
    title:'Product Details | tez.health'
  },
  {
    path:'categories',
    loadComponent: () =>
      import('./pages/home/top-categories/top-categories.component')
        .then(c => c.TopCategoriesComponent),
    title:'Top Categories | tez.health'
  },
  {
    path:'products',
    loadComponent: () =>
      import('./pages/product/service-category/service-category.component')
        .then(c => c.ServiceCategoryComponent),
    title:'Service Categories | tez.health'
  },
  { 
    path: 'about-us',
    loadComponent: () =>
      import('./pages/home/about-us/about-us.component')
        .then(c => c.AboutUsComponent), 
    title:'Home | tez.health' },
  { 
    path: 'partner', 
    loadComponent: () =>
      import('./pages/home/partner/partner.component')
        .then(c => c.PartnerComponent),
    title:'Partner | tez.health' },
  { 
    path: 'contact', 
    loadComponent: () =>
      import('./pages/home/contact-us/contact-us.component')
        .then(c => c.ContactUsComponent),
    title:'Contact | tez.health' },
  { 
    path: 'privacy-policy', 
    loadComponent: () =>
      import('./pages/home/privacy-policy/privacy-policy.component')
        .then(c => c.PrivacyPolicyComponent),
    title:'Privacy Policy | tez.health' },
  { 
    path: 'terms', 
    loadComponent: () =>
      import('./pages/home/terms/terms.component')
        .then(c => c.TermsComponent), 
    title:'Terms | tez.health' },
    { 
      path: 'partner-with-us', 
      loadComponent: () =>
        import('./pages/home/partner-section/partner-section.component')
          .then(c => c.PartnerSectionComponent), 
      title:'Partner With Us | tez.health' },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full',
    title:'Home | tez.health'
  },
  // error pages
  {
    path:'**',
    component:NotFoundComponent,
    title:'NotFound Dashboard'
  },

];
