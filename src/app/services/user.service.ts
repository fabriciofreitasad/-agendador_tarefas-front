import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface UserRegisterPayload {
  nome: string,
  email: string,
  senha: string,
  enderecos?: [
    {
      rua: string,
      numero: number,
      complemento: string,
      cidade: string,
      estado: string,
      cep: string,
    }
  ];
  telefones?: [
    {
      numero: string,
      ddd: string,
    }
  ];
}

interface userRegisterResponse {
  nome: string,
  email: string,
  enderecos: [{
        rua: string,
        numero: number,
        complemento: string,
        cidade: string,
        estado: string,
        cep: string,
        }] | null,
  telefones:[{
        numero: string,
        ddd: string,
        }] | null,
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8083';

  constructor(private http: HttpClient) {}

  register(body: UserRegisterPayload): Observable<userRegisterResponse> {
    return this.http.post<userRegisterResponse>(`${this.apiUrl}/usuario`, body);
  }
}
