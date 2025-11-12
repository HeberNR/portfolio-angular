import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../../services/portfolio';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [],
  templateUrl: './habilidades.html',
  styleUrl: './habilidades.css',
})
export class Habilidades implements OnInit {
  misDatos: any[] = [];
  constructor(private portfolio: Portfolio) { }

  ngOnInit(): void {
    this.portfolio.obtenerHabilidades().subscribe((datos) => {
      this.misDatos = datos;
    });
  }
}
