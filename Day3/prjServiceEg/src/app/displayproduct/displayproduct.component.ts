import { Component, OnInit } from '@angular/core';
import { ProductService } from '../ProductService';
import { Product} from "../Model/product";


@Component({
  selector: 'app-displayproduct',
  templateUrl: './displayproduct.component.html',
  styleUrls: ['./displayproduct.component.css']
})
export class DisplayproductComponent implements OnInit {

  ////Intjecting the service

  constructor(private pservice:ProductService) { }

  pro?:Product[];
  prodid?:Product[];
  ngOnInit(){
    this.displayProductDetails();
  }
  

  //call get products from product service

  displayProductDetails(){
    this.pro=this.pservice.getProducts();
  }

}
