export class Contacto{
    id:number;
    nombre:String;
    link:String;
    img:String;
    
    constructor(id:number,nombre:string,link:string,img:string){
        this.id=id;
        this.nombre=nombre;
        this.link=link;
        this.img=img;
    }
}