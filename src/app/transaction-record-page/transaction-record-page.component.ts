import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-record-page',
  templateUrl: './transaction-record-page.component.html',
  styleUrls: ['./transaction-record-page.component.css']
})
export class TransactionRecordPageComponent implements OnInit {

  arr = new Set<string>();
  presentBefore(unit:any) {
    if (this.arr.has(unit)) {
      console.log('if called');
      return false;
    } else {
      console.log('else called')
      this.arr.add(unit);
      console.log(this.arr);
      return true;
    }
    
  }
  
  transactions = [{
    id: 1,
    isRequested:false,
    date:"7 Oct 2020",
    time:"10:24 AM",
    amount:"3000",
    type:"pay",
    trasacId:"A342344366563464536456",
  },
  {
    id: 2,
    isRequested:true,
    date:"10 Oct 2020",
    time:"10:24 AM",
    amount:"250",
    type:"pay",
    trasacId:"A342344366563464536456",
  },
  {
    id: 3,
    isRequested:false,
    date:"19 Oct 2020",
    time:"10:24 AM",
    amount:"250",
    type:"received",
    trasacId:"A342344366563464536456",
  },
  {
    id: 4,
    isRequested:true,
    date:"19 Oct 2020",
    time:"10:24 AM",
    amount:"250",
    type:"received",
    trasacId:"A342344366563464536456",
  }];

  

  

  constructor() { }

  ngOnInit(): void {
  }
  
}
