export class Product {

    constructor(id?: number, nome?: string, marca?: string, quantidade?: number, valor?: number) {
  
      this.id = id;
      this.nome = nome;
      this.marca = marca;
      this.quantidade = quantidade;
      this.valor = valor;
    }
    public id: number;
    public nome: string;
    public marca: string;
    public quantidade: number;
    public valor: number;
   
  
  }