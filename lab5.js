function createLoginAttemptCounters() {
  const counters = [];
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
