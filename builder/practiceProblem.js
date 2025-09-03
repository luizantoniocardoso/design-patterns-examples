class Car {
  constructor(brand, model, year, engine, color, gps) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.engine = engine;
    this.color = color;
    this.gps = gps;
  }

  showDetails() {
    console.log(
      `${this.year} 
      ${this.brand} 
      ${this.model} 
      - Motor: ${this.engine}, 
      Cor: ${this.color}, 
      GPS: ${this.gps ? "Sim" : "Não"}`
    );
  }
}

class CarBuilder {
  constructor() {
    this.brand = null;
    this.model = null;
    this.year = null;
    this.engine = null;
    this.color = null;
    this.gps = false;
  }

  setBrand(brand) {
    this.brand = brand;
    return this;
  }

  setModel(model) {
    this.model = model;
    return this;
  }

  setYear(year) {
    this.year = year;
    return this;
  }

  setEngine(engine) {
    this.engine = engine;
    return this;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  setGps(gps) {
    this.gps = gps;
    return this;
  }

  build() {
    if (!this.brand || !this.model || !this.year) {
      throw new Error("Marca, modelo e ano são obrigatórios.");
    }

    return new Car(
      this.brand,
      this.model,
      this.year,
      this.engine,
      this.color,
      this.gps
    );
  }
}


const carro = new CarBuilder()
.setBrand('Pegeout')
.setModel('207')
.setYear(2012)
.setEngine('1.4')
.setColor('Branco')
.setGps(false)
.build();
carro.showDetails();
  