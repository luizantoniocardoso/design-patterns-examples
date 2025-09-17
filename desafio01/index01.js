class Lanche {
    constructor(pao, carne, queijo, salada, molho) {
      this.pao = pao;
      this.carne = carne;
      this.queijo = queijo;
      this.salada = salada;
      this.molho = molho;
    }
  
    show() {
      console.log("Lanche:", {
        pao: this.pao,
        carne: this.carne,
        queijo: this.queijo,
        salada: this.salada,
        molho: this.molho,
      });
    }
  }
  
  class LancheBuilder {
    constructor() {
      this.pao = false;
      this.carne = false;
      this.queijo = false;
      this.salada = false;
      this.molho = false;
    }
  
    comPao() {
      this.pao = true;
      return this;
    }
  
    comCarne() {
      this.carne = true;
      return this;
    }
  
    comQueijo() {
      this.queijo = true;
      return this;
    }
  
    comSalada() {
      this.salada = true;
      return this;
    }
  
    comMolho() {
      this.molho = true;
      return this;
    }
  
    build() {
      return new Lanche(this.pao, this.carne, this.queijo, this.salada, this.molho);
    }
  }
  
  const lancheSimples = new LancheBuilder()
    .comPao()
    .comCarne()
    .build();
  
  const lancheCompleto = new LancheBuilder()
    .comPao()
    .comCarne()
    .comQueijo()
    .comSalada()
    .comMolho()
    .build();
  
  lancheSimples.show();
  lancheCompleto.show();
  