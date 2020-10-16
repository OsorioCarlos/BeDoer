import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../../mockup.db';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team: string[] = ['1', '2'];
  categories;

  constructor() { }

  ngOnInit(): void {
  }

  getCategories(): void {
    this.categories = CATEGORIES;
  }

}
