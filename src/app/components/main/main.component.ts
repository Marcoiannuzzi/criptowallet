import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  saldo:number = 150000;
  usuario:string = "Usuario";

  constructor() { }

  ngOnInit(): void {
  }

}
