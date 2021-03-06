import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'my-dashboard',
  styleUrls: [ '../../styles/dashboard.component.css' ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  title = 'Iron Man';
  heroes: Hero[] = [];

  constructor(private heroService: HeroService){}

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(0,7));
  }
}
