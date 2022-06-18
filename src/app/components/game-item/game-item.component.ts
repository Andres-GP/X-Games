import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/models';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit {

  @Input() game: Game;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  openGameDetails(id: string): void {
    this.router.navigate(['details', id]);
  }


}
