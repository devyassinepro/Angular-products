import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  
  produitFormGroup:FormGroup;
  submitted:boolean=false;

  constructor(private fb:FormBuilder,private productsService:ProductsService ) { }

  ngOnInit(): void {
    this.produitFormGroup=this.fb.group({
      name:["",Validators.required],
      price:[0,Validators.required],
      quantity:[0,Validators.required],
      selected:[true,Validators.required],
      available:[true,Validators.required],

    })
  }

  onsaveProduct(){
    this.submitted=true;
    if(this.produitFormGroup?.invalid) return;
   this.productsService.save(this.produitFormGroup?.value).subscribe(data=>{
    alert("success Saving Product");
  });
  }

}
