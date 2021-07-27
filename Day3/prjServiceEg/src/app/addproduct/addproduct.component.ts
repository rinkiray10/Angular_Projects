import { Component, OnInit } from '@angular/core';
import { ProductService } from '../ProductService';
import { Product} from "../Model/product";

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  addproduct(prod: Product) {
    this.pservice.addproduct(prod);
  }
  
  constructor(private pservice:ProductService) { }
  ngOnInit(){
  }
}
