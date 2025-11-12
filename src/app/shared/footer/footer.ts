import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Portfolio } from '../../services/portfolio';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit {
  misDatos: any;  
  constructor (private portfolio: Portfolio) { }

  ngOnInit(): void {
    this.portfolio.obtenerDatosPersonales().subscribe((data) => {
      this.misDatos = data;
    });
  }
}