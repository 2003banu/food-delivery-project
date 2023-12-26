import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductsComponent } from './products/products.component';
import{WelcomeComponent}from './welcome/welcome.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
{path:'login',component:LoginComponent},
{path:'products',component:ProductsComponent},
{path:'cart',component:CartComponent},
{path:'payment',component:PaymentComponent},
{path:'welcome',component:WelcomeComponent},
{path:'',redirectTo:'/welcome',pathMatch:'full'},
{path:'feedback',component:FeedbackComponent},





]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
