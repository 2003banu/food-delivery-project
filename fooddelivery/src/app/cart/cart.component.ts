import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  clearCart(){
    this.items=[];
    return this.items;
  }
  
  

  items=this.cartservice.getItems();
  constructor(private cartservice:CartService){
    
    
  
  }
}


 


