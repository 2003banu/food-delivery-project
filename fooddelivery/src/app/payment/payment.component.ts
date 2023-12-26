import { Component } from '@angular/core';

declare var Razorpay:any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

  

   payNow(){

    const cartItems=[
      {
        name:'item1',price:450},
      {name:'item2',price:50},
    ];
    const totalAmount=cartItems.reduce((sum,item)=>sum+item.price,0);
    
    
    
    const RazorpayOptions={
      description:'Nandhini Razorpay Demo',
      currency:'INR',
      amount:totalAmount*100,
      name:'Nandhini',
      key:'rzp_test_qTfj9KIJQPyP0Y',

      prefills:{
        name:'Nandhini',
        email:'nandhini.d30@gmail.com',
        phone:'8248488074'
      },
      theme:{
        color:'blue'
      },
      modal:{
        ondismiss:()=>{
          console.log('dismissed')
        }
      }

    }
    const successCallback=(paymentid:any)=>{
      console.log(paymentid);
    }
    const failureCallback=(fail:any)=>{
      console.log(fail);
    }
    Razorpay.open(RazorpayOptions,successCallback,failureCallback)

  }
  
}

