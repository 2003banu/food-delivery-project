import { Component } from '@angular/core';
import { Products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  
  product:Products[]=[
    {
      productname:'SAMOSA',
      description:'The samosas are a fried or baked pastry with a savory filling.',
      price:50,
      image:'assets/foods/img1.jpeg'
    },
    {
      productname:'POORI',
      description:'Poori or Puri is a traditional Indian fried bread.',
      price:150,
      image:'assets/foods/img2.jpeg'
    },
    {
      productname:'IDLY',
      description:'idly Recipe (With Homemade Idli Batter).',
      price:250,
      image:'assets/foods/img3.jpeg'
    },
    {
      productname:'DOSA',
      description:'Dosa – a thin and crispy crepe made from rice and urad dal.',
      price:300,
      image:'assets/foods/img4.jpeg'
    },
    {
      productname:'BURGERS',
      description:'VEG & CHEESE BURGERS - Served with Fries, Coleslaw & Ketch up.',
      price:400,
      image:'assets/foods/img5.jpeg'
    },
    {
      productname:'NAAN',
      description:'Naan is a leavened flatbread mostly cooked in a tandoor (clay oven).',
      price:350,
      image:'assets/foods/img6.jpeg'
    },
    {
      productname:'CHICKEN BRIYANI',
      description:'Biryani is a delicious rice dish peppered with scrumptious spices.',
      price:450,
      image:'assets/foods/img7.jpeg'
    },
    {
      productname:'MUTTON BRIYANI',
      description:'Mutton biryani is the epitome of Indian cuisine.',
      price:750,
      image:'assets/foods/img8.jpeg'
    },
    {
      productname:'VEG SPRING ROLL',
      description:'Spring roll(savory snack where a pastry sheet is filled with vegetables).',
      price:500,
      image:'assets/foods/img9.jpeg'
    },
    {
      productname:'CHICKEN SPRING ROLL',
      description:'delicious crispy chicken spring rolls taste amazing with any dipping sauce.',
      price:800,
      image:'assets/foods/img10.jpeg'
    },
    {
      productname:'VEGETABLE PUFF',
      description:'Vegetable puff (stuffing with vegetables).',
      price:150,
      image:'assets/foods/img11.jpeg'
    },
    {
      productname:'CHICKEN PUFF',
      description:'Indian Chicken Puff – Chicken Curry Puff.',
      price:300,
      image:'assets/foods/img12.jpeg'
    }
  ]
  constructor(private router:ActivatedRoute,private cartservice:CartService){}

  addToCart(product:Products){
    this.cartservice.addToCart(product);
    window.alert('item Added to cart!!!....')
  }
  
}
                                                                                                                                                                  