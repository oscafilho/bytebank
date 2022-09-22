import { Observable } from 'rxjs';
import { TransferenciaModel } from './../models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private transferenciaService: any[];
  private url = "http://localhost:3000/transferencias";

  constructor(private httpClient: HttpClient) {
    this.transferenciaService = [];
  }

  get getTransferencias() {
    return this.transferenciaService;
  }

  adicionar(transacao: TransferenciaModel): Observable<TransferenciaModel> {
    this.tratarTransacao(transacao);
    return this.httpClient.post<TransferenciaModel>(this.url, transacao);

    //this.getTransferencias.push(transacao);
  }

  todas(): Observable<TransferenciaModel[]> {
    return this.httpClient.get<TransferenciaModel[]>(this.url);
  }

  private tratarTransacao(transacao: any) {
    transacao.data = new Date()
  }

}
