import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url = "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke"
  
  constructor(
    private http: HttpClient
  ) { }
  
  getDryJoke(){
    return this.http.get<any>(this.url)
  }
  
}
