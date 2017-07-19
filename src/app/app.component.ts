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
  newHero: Hero = new Hero();
  currentHero: Hero = new Hero();
  heroes: Hero[] = [];
  baseApiUrl: string = 'http://172.20.0.143:4567/heroes/';

  constructor(private http: Http){
    //grab all heroes from the API and set them to our heroes array
    this.getHeroes();
  }

  getHeroes(){
    this.http.get(this.baseApiUrl).subscribe(response =>
      this.heroes = response.json()
    )
  }

  postHero(){
    this.http.post(this.baseApiUrl, this.newHero).subscribe(response =>
      this.heroes.push(response.json())
    )
  }

  patchHero(){
    // localhost:9393/heroes/1
    this.http.patch(this.baseApiUrl + this.currentHero.id, this.currentHero).subscribe(response =>
      this.heroes = response.json()
    )
  }

  destroyHero(hero){
    this.http.delete(this.baseApiUrl + hero.id).subscribe(response =>
      this.heroes = response.json()
    )
  }

  editHero(hero){
    this.currentHero = Object.assign({},hero);
  }

  onSubmit(){
    console.log(this.newHero);
  }
}
