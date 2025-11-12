import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../../services/portfolio';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  misDatos: any;
  constructor(private portfolio: Portfolio) { }

  ngOnInit(): void {
    this.portfolio.obtenerDatosPersonales().subscribe((data) => {
      console.log("¡Datos recibidos!", data);
      this.misDatos = data;
    });
  }

}
