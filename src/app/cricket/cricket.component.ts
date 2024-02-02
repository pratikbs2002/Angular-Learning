import { Component } from '@angular/core';
import { CricketDataService } from '../service/cricket-data.service';
import { CommonModule } from '@angular/common';
interface User {
  id: number;
  name: string;
  email: string;
}
@Component({
  selector: 'app-cricket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cricket.component.html',
  styleUrl: './cricket.component.css',
})
export class CricketComponent {
  cricketers: User[] = [];
  constructor(private cricketDataService: CricketDataService) {}

  ngOnInit() {
    this.cricketDataService.getPlayers().subscribe((players) => {
      this.cricketers = players;
    });
  }
}
