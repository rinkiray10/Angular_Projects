import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../ProductService';
import { Product} from "../Model/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.pservice.getItems();

  constructor(private pservice:ProductService,private route:ActivatedRoute) { }

  prodid?:number;
  ngOnInit() {
    this.getAddedProduct();
  }

  addedpro?:any;
  getAddedProduct()
  {
    this.addedpro=this.pservice.getProductInfo(this.route.snapshot.params.id);
  }

}
