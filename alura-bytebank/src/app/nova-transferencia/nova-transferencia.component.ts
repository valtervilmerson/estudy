import { TransferenciaService } from './../services/transferencia.service';
import { Component, Output, EventEmitter } from "@angular/core";
import { Transferencia } from '../models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']

})

export class NovatransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  constructor(private service: TransferenciaService, private router: Router) {

  }

  transferir() {
    console.log('Solicitada nova transferĂȘncia');
    const transferencia: Transferencia = {
      valor: this.valor, destino: this.destino
    }
    this.service.adicionar(transferencia).subscribe(resultado => {
      console.log(resultado)
      this.limparCampos()
      this.router.navigateByUrl('extrato')
    },
      error => console.log(error)
    );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
