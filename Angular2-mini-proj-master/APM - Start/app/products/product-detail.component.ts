import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from './product-service';

@Component({
	templateUrl:'app/products/detail.html',
	styles:['thead{color:#FF0000}','thead{background:#CCC}'],
	providers:[ProductService]
})
export class ProductDetailComponent{
	pageTitle : string = 'Marlabs products';
	imageWidth : number = 40;
	products : IProduct[] ;
	constructor(private _productService : ProductService,private _activatedRoute : ActivatedRoute){
		this.products = _productService.getData();
		this.username= _activatedRoute.snapshot.params['username'];
	}
}