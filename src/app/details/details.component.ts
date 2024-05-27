import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent  implements OnInit {
  str: string = 'new';

  fontWeight: string = 'bold';
  fontSize: string = "24px";

  product: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.product= history.state.product;
  }

  getDynamicStyles(){
    return{
      'font-weight':this.fontWeight,
      'font-size' : this.fontSize
    }
  }

  }

