
// O simbolo de "?" defini o atributo com opcional
export interface TransferenciaModel {
  id?: string;
  valor: number;
  destino: number | string;
  data?: Date;
}
