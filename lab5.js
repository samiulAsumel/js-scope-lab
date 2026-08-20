function createLoginAttemptCounters() {
  const counters = [];
  // let creates a fresh i binding per iteration, so each closure below
  // captures its own i instead of sharing one mutated value (that's the
  // var pitfall — every closure would end up reading the final i).
  for (let i = 0; i < 3; i++) {
    counters.push(function () {
      console.log(`User ${i} attempt logged`);
    });
  }
  return counters;
}

const trackers = createLoginAttemptCounters();
trackers[0]();
trackers[1]();
trackers[2]();
