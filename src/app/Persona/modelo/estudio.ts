export class Estudio{
id:number;
establecimiento:String;
logro:String;
fecha:String;

constructor(id:number,establecimiento:string,logro:string,fecha:string){
    this.id=id;
    this.establecimiento=establecimiento;
    this.logro=logro;
    this.fecha=fecha;
}
}