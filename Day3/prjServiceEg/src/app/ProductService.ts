import {Injectable} from "@angular/core";
import { Product} from "./Model/product";

//decorator
@Injectable()
export class ProductService
{
    product:Product[];
    constructor()
    {
        this.product=[
            {pid:10,pname:'rose',price:10,quantity:15,image:'assets/rose.jpg',desc:'No discount'},
            {pid:11,pname:'sunflower',price:60,quantity:10,image:'assets/sunflower.jpg',desc:'No discount'},
            {pid:12,pname:'Lily',price:100,quantity:100,image:'assets/lily.jpg',desc:'No discount'}
        ];
    }

//fetch all the product info

getProducts()
{
    return this.product;
}

//fetch the particular product details by passing pid

getProductInfo(prodid)
{
    let pinfo;
    this.product.forEach(ele=>{
        if(ele.pid==prodid)
        {
            pinfo=ele;
        }   
    });
    return pinfo;
    }

    //Adding products

    items?:any[];
    addproduct(prod: Product) {
    this.items.push(prod);
    }

    getItems() {
        return this.items;
      }
    //Clearing the cart

    clearCart() {
       this.items = [];
        return this.items;
    }
}