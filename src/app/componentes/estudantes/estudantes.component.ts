import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {
  estudantes =[
    {
      id: '1',
      nome: 'Vanessa',
      idade: '28',
      estado: 'solteira'
    },
    {
      id: '2',
      nome: 'Juan Pablo',
      idade: '47',
      estado: 'casado'
    },
    {
      id: '3',
      nome: 'Milena',
      idade: '24',
      estado: 'casada'
    },
    {
      id: '4',
      nome: 'Igor',
      idade: '22',
      estado: 'solteiro'
    },
    {
      id: '5',
      nome: 'Matheus',
      idade: '22',
      estado: 'solteiro'
    },
    {
      id: '6',
      nome: 'Jorge',
      idade: '24',
      estado: 'em crise'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
