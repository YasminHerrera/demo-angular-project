import { Component, OnInit } from '@angular/core';

export interface GamesInformation {
  position: number;
  name: string;
}

@Component({
  selector: 'app-games-detail',
  templateUrl: './games-detail.component.html',
  styleUrls: ['./games-detail.component.css']
})
export class GamesDetailComponent implements OnInit {

  constructor() { }

  gamesInformation: GamesInformation[] = [
    {position: 1, name: 'Call of Duty: Vanguard'},
    {position: 2, name: 'Rocket League'},
    {position: 3, name: 'Crash Team Racing Nitro-Fueled'},
    {position: 4, name: 'Knack 2'}
  ];

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['position', 'name'];
  dataSource = this.gamesInformation;

  deleteGame(index: number): void{
    console.log("Eliminar juego");
    this.dataSource.splice(index,1)
    this.dataSource = [...this.dataSource];
  }

  addGame(): void{
    console.log("Añadir juego");
    this.dataSource.push({position: (this.dataSource.length+1), name: 'test'});
    this.dataSource = [...this.dataSource];
  }
}