import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../../services/portfolio';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMi implements OnInit {
  misDatos: any;
  constructor(private portfolio: Portfolio) { }

  ngOnInit(): void {
    this.portfolio.obtenerDatosPersonales().subscribe((data) => {
      this.misDatos = data;
    });
  }

}