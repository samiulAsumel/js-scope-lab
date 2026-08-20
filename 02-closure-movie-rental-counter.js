function movieRentalCounter() {
  // rentedCount would normally die when movieRentalCounter() finishes,
  // but the closure below keeps it alive across every rentMovie() call.
  let rentedCount = 0;

  return function rentMovie() {
    rentedCount++;
    console.log(`Total movies rented: ${rentedCount}`);
  };
}

const rentMovie = movieRentalCounter();

rentMovie();
rentMovie();
rentMovie();
