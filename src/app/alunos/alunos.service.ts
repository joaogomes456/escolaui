import { Injectable } from '@angular/core';
import { Aluno } from '../core/model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http: HttpClient) { }

  listAlunos(): Aluno[] {
    return [
      {id: 1, nomealuno: 'Josué'},
      {id: 2, nomealuno: 'Maria'},
      {id: 3, nomealuno: 'Antônio'},
      {id: 4, nomealuno: 'João'},
      {id: 5, nomealuno: 'Rosangela'},
      {id: 6, nomealuno: 'Osvaldo'}
    ];

  }

}
