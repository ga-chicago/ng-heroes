import { Component } from '@angular/core';
import {Http, Response } from '@angular/http';

class Hero{
  id: number;
  name: string;
  power: string;
  secret_ident:  string;
  nemesis: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  myHero: Hero = new Hero();
  heroes: Hero[] = [{id: 1, name: "spidey", power: "web", secret_ident: "test", nemesis: "goblin"}];

  constructor(private http: Http){
    //grab all heroes from the API and set them to our heroes array
    this.getHeroes();
  }


  onSubmit(){
    console.log(this.myHero);
  }
}
