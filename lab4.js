const car = {
  brand: "Toyota",
  fuelLevel: 50,

  drive(distance) {
    // this refers to whichever object called drive() — here, car.
    this.fuelLevel -= distance * 0.1;
    console.log(`${this.brand} drove ${distance}km, fuel left: ${this.fuelLevel}`);
  },

  refuel(amount) {
    this.fuelLevel += amount;
    console.log(`${this.brand} refueled, fuel left: ${this.fuelLevel}`);
  },
};

car.drive(100);
car.refuel(20);
