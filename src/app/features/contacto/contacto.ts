import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Portfolio } from '../../services/portfolio';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto implements OnInit {
  misDatos: any;
  contactForm: FormGroup;

  constructor (
    private fb: FormBuilder,
    private portfolio: Portfolio
  ) {
    this.contactForm = this.fb.group ( {
      nombre: [''],
      apellido: [''],
      email: [''],
      mensaje: ['']
    });
  }

  ngOnInit(): void {
    this.portfolio.obtenerDatosPersonales().subscribe (datos => {
      this.misDatos = datos;
    })
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Formulario enviado:', this.contactForm.value);
      alert('Mensaje enviado con éxito! (simulado)');
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  get f() { return this.contactForm.controls;}
}
