import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/core/model';

@Component({
  selector: 'app-listaalunos',
  templateUrl: './listaalunos.component.html',
  styleUrls: ['./listaalunos.component.scss']
})
export class ListaalunosComponent implements OnInit {

  alunos: Aluno[] = [
    {id: 1, nomealuno: 'Josué'},
    {id: 2, nomealuno: 'Maria'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
