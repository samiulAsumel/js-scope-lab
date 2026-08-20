function movieRentalCounter() {
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
