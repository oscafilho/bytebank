import { TransferenciaModel } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferenciaExtrato: any[];

  constructor(private service: TransferenciaService) { }

  ngOnInit() {
    // this.transferenciaExtrato = this.service.getTransferencias;
    this.service.todas().subscribe((transacoes: TransferenciaModel[]) =>{
      console.table(transacoes);
      this.transferenciaExtrato = transacoes;
    });
  }

}
