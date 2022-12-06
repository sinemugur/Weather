import { Component } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Injectable } from  '@angular/core';
import { Clouds } from './interface/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable({
  providedIn:  'root'
  })
export class AppComponent {
  title = 'Weather';
  aaa: Clouds;
  posts : any;
  lon:number;
  lat:number;

  loaded = false;
  private url = 'http://localhost:8080/api/1.0/weather';
  constructor(private http: HttpClient) {

    
   }
  

getPosts() {
  if(this.lon && this.lat){
	this.http.get(this.url+"/"+this.lon+"/"+this.lat).subscribe(
    (response) => { this.posts = response; },
    (error) => { console.log(error); });
  this.loaded=true;
  }
  console.log("please enter lon and lat")
}
}
