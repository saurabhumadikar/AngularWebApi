import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Component({
  selector: 'app-test-response',
  templateUrl: './test-response.component.html',
  styleUrls: ['./test-response.component.css']
})
export class TestResponseComponent implements OnInit {
  StateData:{ }
  constructor(private http:HttpClient) { }

  ngOnInit() {
    
    

    this.fetchData();
    console.log('Test data '+ this.StateData);
    alert(Object.keys(this.StateData)[0]); // returns first

    

  }

  fetchData(){
    this.http.get('https://api.covid19india.org/state_district_wise.json').subscribe(data => {
    
    //this.StateData= JSON.stringify(data);
    let temp:any=data;
    console.log(temp.Maharashtra);

    this.StateData=temp.Maharashtra;


  } )
  }
 

}
