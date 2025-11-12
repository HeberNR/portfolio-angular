import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../../services/portfolio';

@Component({
  selector: 'app-mis-proyectos',
  standalone: true,
  imports: [],
  templateUrl: './mis-proyectos.html',
  styleUrl: './mis-proyectos.css',
})
export class MisProyectos implements OnInit {
  misDatos: any[] = [];
  constructor(private portfolio: Portfolio) { }

  ngOnInit(): void {
    this.portfolio.obtenerProyectos().subscribe((datos) => {
      this.misDatos = datos;
    });
  }
}