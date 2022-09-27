import { Injectable } from '@angular/core';
import { Aluno } from '../core/model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private readonly API = '/assets/alunos.json';

  constructor(private http: HttpClient) { }

  listAlunos() {
    return this.http.get<Aluno[]>(this.API);
  }

}
